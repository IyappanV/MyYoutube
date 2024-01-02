import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-[16px] h-[56px] shadow-lg">
      <div className="flex col-span-1 my-2">
        <img
          onClick={handleToggleMenu}
          className="h-10 rounded-full cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <img
          className="h-5 mx-4 my-3"
          alt="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="col-span-10 my-2 ml-[16%]">
        <div>
          <input
            className="w-[57%] h-[90%] border border-[#ccc] p-2 rounded-s-3xl pl-[16px]"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-[90%] border border-[#ccc] px-5 py-2 rounded-e-3xl bg-[#f8f8f8]">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white fixed py-[1.15rem] w-[35.2%] shadow-2xl rounded-xl">
            <ul>
              {suggestions.map((item) => (
                <li
                  onChange={(event) => console.log("Item clicked:", event.target.value)}
                  key={item}
                  className="px-4 h-8 shadow-sm hover:bg-gray-200"
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ml-[45%] mt-2">
        <img
          className="h-[38px] w-[38px]"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;

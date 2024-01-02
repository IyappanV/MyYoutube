import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-[40%]">
      <div className="border-b-2">
        <ul className="justify-center align-middle py-2 px-4">
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Shorts
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="font-bold text-lg px-5">You</h1>
        <ul className="justify-center align-middle py-2 px-4">
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Your Channel
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            History
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Your videos
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Watch Later
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Liked videos
          </li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="font-bold text-lg px-5">Subscriptions</h1>
        <ul className="justify-center align-middle py-2 px-4">
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Akshay Saini
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Tamil Pokkisham
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Fell the Vibe
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Movies
          </li>
          <li className="h-8 mt-1 cursor-pointer hover:bg-gray-200 px-8 py-1 rounded-xl">
            Gaming
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

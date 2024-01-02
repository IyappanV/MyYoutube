import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeString(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[520px] ml-6 p-2 border border-[rgba(0,0,0,0.1)] rounded-t-xl overflow-y-scroll flex flex-col-reverse">
        <div className="mx-2">
          {ChatMessages.map((mes, index) => (
            <ChatMessage key={index} name={mes.name} message={mes.message} />
          ))}
        </div>
      </div>
      <div className="w-full h-[10%] ml-6 p-2 border">
        <form
          className="flex justify-between mx-2 w-[90%] h-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitting the form!", liveMessage);
            dispatch(
              addMessage({ name: "I am VR", message: liveMessage })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="w-[80%] bg-gray-100 rounded-2xl p-3"
            type="text"
            placeholder="Chat..."
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="w-[15%] bg-gray-100 rounded-2xl">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;

import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Simulating API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message:
            makeRandomMessage(10) + " from " + generateRandomName() + "🚀",
        })
      );
      console.log("API Polling");
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="ml-2 w-full h-[600px] p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <h1 className="font-bold text-2xl my-2">Live Chat</h1>
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 flex"
        onSubmit={(e) => {e.preventDefault();
        dispatch(addMessage({
            name:"Teja",
            message: liveMessage + "🚀"
        }));
        setLiveMessage("")}}
      >
        <label className="font-bold text-2xl mx-2">Add chat:</label>
        <input
          type="text"
          className="px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

import React from "react";

const ChatMessage = ({name,message} ) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
          className="h-8"
          src="https://i.pinimg.com/564x/9e/5b/c0/9e5bc04372764479079dcbd8f0196318.jpg"
          alt="user_logo"
        ></img>
        
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
        
        
    </div>
  );
};

export default ChatMessage;

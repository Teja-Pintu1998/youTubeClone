import React from "react";
import Button from "./Button";

let listOfButtons = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Programming",
  "Cooking",
  "Cricket",
  "Dynamic Programming",
  "Cooking Indian style",
  "Cricket Fans",
  "Web development"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {
        listOfButtons.map((item) =>  <Button key={item} name={item}/> 
        
        )
      }
    </div>
  );
};

export default ButtonList;

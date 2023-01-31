import React from "react";

export default function Square({ onClick, item }) {
  return (
    <button
      onClick={() => {
        onClick(item);
      }}
      style={{ backgroundColor: item.isOpen ? item.color : "#696969" }}
      className="border 
                 rounded-xl 
                 mx-4 my-4 
                 border-[#696969] 
                 transition
                 ease-linear
                 delay-150
                 h-20 
                 w-20"
    />
  );
}

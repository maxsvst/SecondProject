import React from "react";
import { squareStyle } from "../../styles/styles";

export default function Square({ onClick, item }) {
  return (
    <button
      onClick={() => {
        onClick(item);
      }}
      style={{ backgroundColor: item.isOpen ? item.color : "#696969" }}
      className={squareStyle}
    />
  );
}

import React, { useEffect, useState } from "react";
import Square from "../molecules/Square";

const startColorsArray = [
  { id: 0, color: "#27272A", isOpen: false },
  { id: 1, color: "#E02424", isOpen: false },
  { id: 2, color: "#7E3AF2", isOpen: false },
  { id: 3, color: "#FFAC1E", isOpen: false },
  { id: 4, color: "#7EF05F", isOpen: false },
  { id: 5, color: "#37ACB7", isOpen: false },
  { id: 6, color: "#99582A", isOpen: false },
  { id: 7, color: "#FF4D6D", isOpen: false },
  { id: 8, color: "#27272A", isOpen: false },
  { id: 9, color: "#E02424", isOpen: false },
  { id: 10, color: "#7E3AF2", isOpen: false },
  { id: 11, color: "#FFAC1E", isOpen: false },
  { id: 12, color: "#7EF05F", isOpen: false },
  { id: 13, color: "#37ACB7", isOpen: false },
  { id: 14, color: "#99582A", isOpen: false },
  { id: 15, color: "#FF4D6D", isOpen: false },
];

export default function GameField() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = array[i];
      array[i] = array[j];
      array[j] = t;
    }
    return array;
  }

  const [colorsArray, setColorsArray] = useState(startColorsArray);
  const [colorsToCompare, setColorsToCompare] = useState([]);
  const [round, setRound] = useState(1);

  useEffect(() => {
    if (
      colorsToCompare.length === 2 &&
      colorsToCompare[0].color === colorsToCompare[1].color &&
      colorsToCompare[0].id !== colorsToCompare[1].id
    ) {
      const nextRoundColors = colorsArray.filter(
        (item) =>
          item.id !== colorsToCompare[0].id && item.id !== colorsToCompare[1].id
      );
      setTimeout(() => {
        setColorsArray([...nextRoundColors]);
      }, 100);
      setColorsToCompare([]);
    } else if (
      colorsToCompare.length === 2 &&
      colorsToCompare[0].color !== colorsToCompare[1].color
    ) {
      setTimeout(() => {
        setColorsToCompare([]);
        setRound(round + 1);
      }, 300);
      startColorsArray
        .filter((color) => color.isOpen === true)
        .map((color) => (color.isOpen = false));
    } else if (
      colorsToCompare.length === 2 &&
      colorsToCompare[0].color === colorsToCompare[1].color &&
      colorsToCompare[0].id === colorsToCompare[1].id
    )
      setColorsToCompare([]);
  }, [colorsToCompare, colorsArray, round]);

  function startNewGame() {
    startColorsArray
      .filter((color) => color.isOpen === true)
      .map((color) => (color.isOpen = false));
    setColorsArray([...shuffle(startColorsArray)]); // Что будет без spread?
    setRound(1);
  }

  function createSquares(array) {
    return array.map((item, key) => (
      <Square
        key={key}
        item={item}
        onClick={(item) => {
          colorsArray
            .filter((color) => color.id === item.id)
            .map(() => (item.isOpen = !item.isOpen));
          setTimeout(() => {
            setColorsToCompare([...colorsToCompare, item]);
          }, 100);
        }}
      />
    ));
  }

  return (
    <div
      className="flex 
                 flex-col 
                 items-center"
    >
      <div
        className="h-full 
                   flex 
                   items-center 
                   justify-center"
      >
        <div
          className="flex 
                     flex-wrap 
                     items-center 
                     justify-center 
                     basis-[30%]
                     my-16 
                     border 
                     rounded-2xl 
                   border-[#696969]"
        >
          {createSquares(colorsArray)}
        </div>
      </div>
      <div className="flex 
                      flex-col 
                      items-center">
        <span
          className="font-sans 
                     font-bold"
        >
          {`Текущий раунд: ${round}`}
        </span>
        <button
          onClick={startNewGame}
          className="px-3
                     mt-3 
                     py-3
                     rounded-2xl 
                     border
                   border-[#696969]
                     transition
                     ease-linear
                     delay-150
                   hover:bg-[#696969]
                     font-sans 
                     font-normal 
                   text-[#696969]
                   hover:text-white"
        >
          Начать новую игру
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { buttonStyle, squaresStyle } from "../../styles/styles";
import Square from "../molecules/Square";
import { deepCopy, shuffle, startColorsArray } from "../../helpers/common";

export default function GameField() {
  const [colorsArray, setColorsArray] = useState([]);
  const [colorToCompare, setColorToCompare] = useState([]);
  const [round, setRound] = useState(1);

  const isColorsArrayEmpty = colorsArray.length === 0 ? "invisible " : "visible ";
  
  useEffect(() => {
    setColorsArray(shuffle(startColorsArray));
  }, []);

  const startNewGame = () => {
    setColorsArray(shuffle(startColorsArray));
    setRound(1);
  };

  const toggleCard = (item) => {
    const updatedColors = deepCopy(colorsArray);

    if (!colorToCompare.id) {
      setColorToCompare(item);
    }

    updatedColors
      .filter((colorItem) => colorItem.id === item.id)
      .map((colorItem) => (colorItem.isOpen = !colorItem.isOpen));

    setColorsArray(updatedColors);
  };

  const colorsMatched = (item) => {
    if (colorToCompare.color === item.color && colorToCompare.id !== item.id) {
      setTimeout(() => {
        const updatedColors = deepCopy(colorsArray).filter(
          (colorItem) =>
            colorItem.id !== colorToCompare.id && colorItem.id !== item.id
        );
        setColorsArray(updatedColors);
      }, 250);
      setColorToCompare({});
    }
  };

  const colorsDiffrent = (item) => {
    if (colorToCompare.id && colorToCompare.color !== item.color) {
      setTimeout(() => {
        const updatedColors = deepCopy(colorsArray);
        updatedColors.map((color) => (color.isOpen = false));
        setColorsArray(updatedColors);
        setRound(round + 1);
      }, 250);
      console.log("Разные");
      setColorToCompare({});
    }
  };

  const onClickHandler = (item) => {
    toggleCard(item);
    colorsMatched(item);
    colorsDiffrent(item);
  };

  const Squares = () => {
    return colorsArray.map((item, key) => (
      <Square
        key={key}
        item={item}
        onClick={(item) => {
          onClickHandler(item);
        }}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-full flex items-center justify-center px-4">
        <div className={isColorsArrayEmpty + squaresStyle}>
          <Squares />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-sans font-bold">{`Текущий раунд: ${round}`}</span>
        <button onClick={startNewGame} className={buttonStyle}>
          Начать новую игру
        </button>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { GameContext } from "./GameProvider";
import "./Cell.css";

// Child Component
const Cell = ({ row, col }) => {
  // use state management tool to pass data
  const { gameBoard, 
          setGameBoard, 
          handleCellClick, 
          gameOver, 
          sawsLeft,
          setSawsLeft
        } = useContext(GameContext);
        
  const cell = gameBoard[row][col];

  const handleClick = () => {
    handleCellClick(row, col);
  };

  // Extra Credit: Flag saw Function
  const handleRightClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (cell.isRevealed || gameOver) return;

    const updatedBoard = gameBoard.map((row) =>
      row.map((c) => ({ ...c }))
    );

    // toggle the flag state
    updatedBoard[row][col].isFlagged = !updatedBoard[row][col].isFlagged;

    // update the saws Left
    const newSawsLeft = sawsLeft + (updatedBoard[row][col].isFlagged ? -1 : 1);
    setSawsLeft(newSawsLeft);

    setGameBoard(updatedBoard); 
    }

  return (
    <div
    className={`cell ${
      cell.isRevealed
        ? cell.isSaw
          ? "saw"
          : "revealed"
        : cell.isFlagged
        ? "flagged"
        : "unselected"
      }`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
        {cell.isFlagged
        ? "🚩" // Show flag if the cell is flagged
        : cell.isRevealed && cell.isSaw
        ? "🪓" // Show lumberjack icon for saws
        : cell.isRevealed && !cell.isSaw && cell.neighborSaws === 0
        ? "🌳" // Show tree emoji for safe habitats
        : cell.isRevealed && !cell.isSaw && cell.neighborSaws > 0
        ? cell.neighborSaws // Show number for neighboring saws
        : ""}
    </div>
  );
};

export default Cell;

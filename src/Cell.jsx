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
          bombsLeft,
          setBombsLeft
        } = useContext(GameContext);
        
  const cell = gameBoard[row][col];

  const handleClick = () => {
    handleCellClick(row, col);
  };

  // Extra Credit: Flag Bomb Function
  const handleRightClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (cell.isRevealed || gameOver) return;

    const updatedBoard = gameBoard.map((row) =>
      row.map((c) => ({ ...c }))
    );

    // toggle the flag state
    updatedBoard[row][col].isFlagged = !updatedBoard[row][col].isFlagged;

    // update the bombs Left
    const newBombsLeft = bombsLeft + (updatedBoard[row][col].isFlagged ? -1 : 1);
    setBombsLeft(newBombsLeft);

    setGameBoard(updatedBoard); 
    }

  return (
    <div
    className={`cell ${
      cell.isRevealed
        ? cell.isMine
          ? "mine"
          : "revealed"
        : cell.isFlagged
        ? "flagged"
        : "unselected"
      }`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {cell.isFlagged
        ? "🚩"
        : cell.isRevealed && !cell.isMine && cell.neighborMines > 0
        ? cell.neighborMines
        : cell.isRevealed && cell.isMine
        ? "💣"
        : ""}
    </div>
  );
};

export default Cell;

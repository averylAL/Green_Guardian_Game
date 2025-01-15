import React, { useContext } from "react";
import { GameContext } from "./GameProvider";
import Cell from './Cell';
import "./Game.css";

const Game = () => {
  const {
    gameBoard,
    resetGame,
    difficulty,
    gameOver,
    win,
    bombsLeft,
  } = useContext(GameContext);

  const rows = gameBoard.length;
  const cols = gameBoard[0]?.length || 0;

  return (
    <div className="GameContainer">
      <div className="GameHeader">
        <h1>Minesweeper</h1>
        <p>Current Difficulty Mode: {difficulty}</p>
        <p>Bomb Left Count: {bombsLeft}</p>
        <button onClick={resetGame}>Reset</button>
      </div>
      {gameOver && <h2>{
                          gameOver && 
                          <h2>{
                            win ? "Game over! You Won!" : "Game over! You lost!"
                            }
                          </h2>
                        }
                    </h2>
        }
      <div
        className="GameBoard"
        style={{
          // customize col and row based on difficulty level
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {gameBoard.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            // use key as sepcial props for list rendering
            <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} cell={cell}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Game;
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
    sawLeft,
  } = useContext(GameContext);

  const rows = gameBoard.length;
  const cols = gameBoard[0]?.length || 0;

  return (
    <div className="GameContainer">
      <div className="GameHeader">
        <h1>Green Guardian</h1>
        <p>Lumberjacks Left Count: {sawLeft}</p>
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
      <p>

      </p>
      <button onClick={resetGame}>Reset</button>
      {/* <p>Current Difficulty Mode: {difficulty}</p> */}
    </div>
  );
};

export default Game;
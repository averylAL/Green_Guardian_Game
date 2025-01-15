import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const {difficulty: routeDifficulty } = useParams();
  const [gameBoard, setGameBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  // Extra credit:Flag Saw Function
  const [sawLeft, setSawsLeft] = useState(0);

  // 3 difficulty level
  const difficulties = {
    easy: { rows: 8, cols: 8, saws: 10 },
    medium: { rows: 16, cols: 16, saws: 40 },
    hard: { rows: 30, cols: 16, saws: 99 },
  };


  const initializeBoard = (rows, cols, saws) => {
    const board = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isSaw: false,
        isRevealed: false,
        isFlagged: false,
        neighborSaws: 0,
      }))
    );

    // Place saws
    let sawCount = 0;
    while (sawCount < saws) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!board[randomRow][randomCol].isSaw) {
        board[randomRow][randomCol].isSaw = true;
        sawCount++;
      }
    }

    // Calculate neighbor saw counts
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!board[row][col].isSaw) {
          const neighbors = [
            // top left
            [row - 1, col - 1],
            // top
            [row - 1, col],
            // top right
            [row - 1, col + 1],
            // left
            [row, col - 1],
            // right
            [row, col + 1],
            // bottom left
            [row + 1, col - 1],
            // bottom
            [row + 1, col],
            // bottom right
            [row + 1, col + 1],
          ];
          board[row][col].neighborSaws = neighbors.reduce((count, [r, c]) => {
            // check if neighbor cell pos is valid(not exceeds board) and has saw
            if (r >= 0 && 
                r < rows && 
                c >= 0 && 
                c < cols && 
                board[r][c].isSaw) {
              count++;
            }
            return count;
          }, 0);
        }
      }
    }
    setGameBoard(board);
    setSawsLeft(saws);
    setGameOver(false);
    setWin(false);
  };


  const resetGame = () => {
    const {rows, cols, saws} = difficulties[difficulty];
    initializeBoard(rows, cols, saws);
    setSawsLeft(saws); 
  };

  const checkWinCondition = () => {
    const allSafeCellsRevealed = gameBoard.flat().every(
      (cell) => cell.isRevealed || cell.isSaw
    );
    if (allSafeCellsRevealed) {
      setWin(true);
      setGameOver(true);
    }
  };

  const handleCellClick = (row, col) => {
    if (gameOver || gameBoard[row][col].isRevealed) return;
    // get a copy of curret game board
    const newBoard = gameBoard.map((r) =>
      r.map((cell) => ({ ...cell }))
    );

    if (newBoard[row][col].isSaw) {
      newBoard[row][col].isRevealed = true;
      setGameOver(true);
    } else {
      newBoard[row][col].isRevealed = true;
      // Extra Credit: Auto Clear
      if (newBoard[row][col].neighborSaws === 0) {
        revealEmptyCells(newBoard, row, col);
      }
    }
    // update game state with new board
    setGameBoard(newBoard);
    checkWinCondition();
  };

  // Extra Credit: Auto Clear
  const revealEmptyCells = (board, row, col) => {
    // contain clicked cell
    const stack = [[row, col]];
    while (stack.length) {
      // pop most recent cell
      const [r, c] = stack.pop();
      // get neighbors of current cell
      const neighbors = [
        [r - 1, c - 1],
        [r - 1, c],
        [r - 1, c + 1],
        [r, c - 1],
        [r, c + 1],
        [r + 1, c - 1],
        [r + 1, c],
        [r + 1, c + 1],
      ];
      neighbors.forEach(([nr, nc]) => {
        if (
          nr >= 0 &&
          nr < board.length &&
          nc >= 0 &&
          nc < board[0].length &&
          !board[nr][nc].isRevealed &&
          !board[nr][nc].isSaw
        ) {
          board[nr][nc].isRevealed = true;
          if (board[nr][nc].neighborSaws === 0) {
            stack.push([nr, nc]);
          }
        }
      });
    }
  };

  useEffect(() => {
    const validDifficulties = ["easy", "medium", "hard"];
    const selectedDifficulty = validDifficulties.includes(routeDifficulty)
      ? routeDifficulty
      : "easy";
  
    const {rows, cols, saws} = difficulties[selectedDifficulty];
    initializeBoard(rows, cols, saws);
    setDifficulty(selectedDifficulty);
  }, [routeDifficulty]);
  
  return (
    <GameContext.Provider
      value={{
        gameBoard,
        gameOver,
        win,
        setGameBoard,
        setDifficulty,
        resetGame,
        difficulty,
        handleCellClick,
        sawLeft, 
        setSawsLeft
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

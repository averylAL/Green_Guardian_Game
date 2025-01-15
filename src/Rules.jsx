import React from 'react';
import "./Rules.css";

const Rules = () => (
    <div className="RuleContainer">
        <div className="RulesContent">
            <div>
                <h2>Game Rules</h2>
                <p>To win, you need to find all of the safe spaces on the board that DO NOT have mines. 
                You can does this by using mouse to click on the grid squares. </p>
                <ul>
                    <li>Number: Each cell with a number indicates how many mines are in the surrounding cells 
                                    (vertically, horizontally, or diagonally).</li>
                    <li>Bomb: Clicking a mine ends the game.</li>
                    <li>Flag a bomb: You can right-click on a cell to place a flag, indicating that you suspect a mine is there. 
                                    If you don't want to flag a cell, simply right-click again to remove the flag.</li>
                    <li>Note: If you believe a flagged cell is safe, you can just click on it to reveal the cell.</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Rules;
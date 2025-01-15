import React from 'react';
import "./Rules.css";

const Rules = () => (
  <div className="RulesContainer">
    <div className="RulesContent">
      <div>
        <h1>Welcome to "Green Guardian Game"!</h1>
        <p>
          As a protector of the forest, your mission is to uncover hidden wildlife habitats 🌳 while avoiding areas threatened by lumberjacks 🪓. 
          The forest is under threat, and it’s up to you to safeguard the remaining sanctuaries for nature to thrive. Use your strategy and 
          intuition to find all the safe habitats while steering clear of the lumberjacks' zones. Will you succeed in protecting the forest?
        </p>
        <h2>Game Rules</h2>
        <h3>Objective</h3>
        <p>
          To win, you need to uncover all the safe habitats 🌳 while avoiding zones occupied by lumberjacks 🪓.
        </p>
        <h3>How to Play</h3>
        <ul>
          <li>
            <strong>Search for Habitats:</strong> Click on grid squares to reveal what lies beneath. Your goal is to find all the safe habitats 🌳 
            without stepping into areas controlled by lumberjacks 🪓.
          </li>
          <li>
            <strong>Numbers Show Lumberjack Proximity:</strong> Each cell with a number indicates how many lumberjack zones 🪓 are in the 
            surrounding cells (vertically, horizontally, or diagonally).
          </li>
          <li>
            <strong>Avoid Lumberjack Zones:</strong> Clicking on a cell with a lumberjack 🪓 ends the game immediately. Be cautious in your exploration.
          </li>
          <li>
            <strong>Flag Suspected Lumberjack Zones:</strong> Right-click on a cell to place a flag (🚩), marking it as a potential lumberjack zone. 
            To remove a flag, right-click again.
          </li>
          <li>
            <strong>Note:</strong> If you believe a flagged cell is safe, left-click on it to reveal its content.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Rules;

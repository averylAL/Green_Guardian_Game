import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

const Home = () => (
  <div className="HomeContainer">
    <header className="HomeHeader">
      <h1>Welcome to "Green Guardian Game"!</h1>
      <p>
          As a protector of the forest, your mission is to uncover hidden wildlife habitats 🌳 while avoiding areas threatened by lumberjacks 🪓. 
          The forest is under threat, and it’s up to you to safeguard the remaining sanctuaries for nature to thrive. Use your strategy and 
          intuition to find all the safe habitats while steering clear of the lumberjacks' zones. Will you succeed in protecting the forest?
        </p>
    </header>
    <nav className="HomeNav">
      <NavLink to="/game/easy" className="HomeLink">
        Play Game
      </NavLink>
    </nav>
  </div>
);

export default Home;
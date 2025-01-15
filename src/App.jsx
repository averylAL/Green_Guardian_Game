import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./HomePage";
import Rules from "./Rules";
import { GameProvider } from "./GameProvider";
import Game from "./Game";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/rules",
    element: (
      <Layout>
        <Rules />
      </Layout>
    ),
  },
  {
    path: "/game",
    element: (
      <GameProvider>
        <Layout>
          <Game />
        </Layout>
      </GameProvider>
    ),
  },
  {
    path: "/game/:difficulty",
    element: (
      <GameProvider>
        <Layout>
          <Game />
        </Layout>
      </GameProvider>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

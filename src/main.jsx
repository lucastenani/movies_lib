import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="movie/:id" element={<Movie />} />
          <Route exact path="search" element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

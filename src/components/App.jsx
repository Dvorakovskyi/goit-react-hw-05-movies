import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
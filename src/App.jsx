import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import Error404 from "./pages/Error404";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Lista" />} />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Lista" />}
          />
          <Route path="/items/:id" element={<div>Details</div>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

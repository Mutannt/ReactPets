import React from 'react'
import "./scss/app.scss";
import {BrowserRouter, Routes, Route, } from "react-router-dom";

import Header from "./components/Header";
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
// import dbPets from "./assets/Pets.json";

function App() {
  return (
    <div className="wrapper">
      <Header /> {/* ИЛИ  вызвать как функцию Header()*/}
      <div className="content">
        <div className="container">
        <Routes>
          {/* path - адрес страницы /pets/:id*/}
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          {/*... path="*", применяется если никакой route не подошёл */}
          <Route path="*" element={<NotFound />}/>
        </Routes>

          {/* <NotFound /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

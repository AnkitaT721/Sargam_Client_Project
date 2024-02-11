import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebFont from 'webfontloader';
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";

function App() {
  useEffect(() => {

    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

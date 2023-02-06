import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/SignIn";
import NavBar from './components/NavBar';
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Business from "./components/Business";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import NewCard from "./components/NewCard";
import MyCards from "./components/MyCards";
import { Modal } from "react-bootstrap";
import AllCards from "./components/AllCards";
import React from "react";

function App() {
  let [cardsChange, setCardsChange] = useState<boolean>(false)
  let refresh = () => {
    setCardsChange(!cardsChange)
  }

  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    sessionStorage.getItem("userDatas") != null
      ? JSON.parse(sessionStorage.getItem("userData") as string).isLoggedIn
      : false
  );
  let [isBuisness, setIsBuisness] = useState<boolean>(
    sessionStorage.getItem("userDatas") != null
      ? JSON.parse(sessionStorage.getItem("userData") as string).isBuisness
      : false
  )

  let [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    let json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json)
  }, [darkMode])



  return (
    <div className="App">
      <Router>

        <button className="btn btn-secondary" style={{ display: "flex", justifyContent: "left" }} onClick={() => setDarkMode(!darkMode)}><i className="fa-solid fa-moon "></i></button>

        <ToastContainer />
        <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} isBuisness={isBuisness} />
        <Routes>
          <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} setIsBuisness={setIsBuisness} />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="signUp" element={<SignUp setIsLoggedIn={setIsLoggedIn} setIsBuisness={setIsBuisness} />} />
          <Route path="newCard" element={<NewCard cardsChange={cardsChange} setCardsChange={setCardsChange} />} />
          <Route path="allCards" element={<AllCards refresh={refresh} cardsChange={cardsChange} setCardsChange={setCardsChange} />} />
          <Route path="myCards" element={<MyCards refresh={refresh} cardsChange={cardsChange} setCardsChange={setCardsChange} />} />
          <Route path="business" element={<Business setIsLoggedIn={setIsLoggedIn} setIsBuisness={setIsBuisness} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

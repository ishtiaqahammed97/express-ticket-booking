import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Schedule from "./Components/Schedule/Schedule";
import Admin from "./Components/Admin/Admin";
import Journey from "./Components/Journey/Journey";
import Purchase from "./Components/Purchase/Purchase";

import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

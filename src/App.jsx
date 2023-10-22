import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Schedule from "./Components/Schedule/Schedule";
import Admin from "./Components/Admin/Admin";
import Journey from "./Components/Journey/Journey";
import Purchase from "./Components/Purchase/Purchase";

import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/journey">
            <Journey></Journey>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route path="/schedule">
            <Schedule></Schedule>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

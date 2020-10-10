import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage"

function App() {


  return (
    <Router >
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/game" component={GamePage}/>
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";
import HomePage from "./pages/HomePage";

function App() {


  return (
    <Router >
      {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;

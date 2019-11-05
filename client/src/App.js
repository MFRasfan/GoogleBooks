import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBook from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBook} />
          <Route exact path="/saved/:id" component={SavedBook} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
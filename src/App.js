import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact render={() => <Home />}></Route>
      <div className="App">
        <header className="bg-gray-200">Test</header>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import Jumbotron from "./components/jumbotron"
import Searchbar from "./components/searchbar"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Jumbotron />
        <Searchbar />
      </div>
    );
  }
}

export default App;

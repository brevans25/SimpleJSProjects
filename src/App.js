import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";

//App components
import NavBar from "./components/NavBar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Route exactpath="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

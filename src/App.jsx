import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <About />
        <Portfolio />
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <About />
      </Router>
    </React.Fragment>
  );
}

export default App;

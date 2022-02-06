import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <About />
        <Portfolio />
        <Blog />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

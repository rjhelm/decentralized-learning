import React, { useState, useEffect } from "react";
import Preloader from "../src/Helpers/Preload";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Project";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "../src/Helpers/ScrollToTop";

function App() {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router basename='/ryan-port-react'>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          {<Route path="/resume" component={" "} />}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

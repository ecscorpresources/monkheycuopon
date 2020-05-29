import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
import Footer from "./components/includes/Footer/Footer";
import Landing from "./components/pages/Landing/Landing";
import List from "./components/pages/Landing/List";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/list" component={List} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

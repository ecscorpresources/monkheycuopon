import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Globals/Navbar/Navbar";
import Footer from "./Globals/Footer/Footer";
import Landing from "./components/pages/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/ProfileForm";
import UploadCuopon from "./components/Dashboard/UploadCoupon";
import ChangePassword from "./components/auth/ChangePassword";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/uploadcuopon" component={UploadCuopon} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/productlist" component={ProductList} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
import Footer from "./components/includes/Footer/Footer";
import Landing from "./components/pages/Landing/Landing";
import Graphics from "./components/pages/Landing/Graphics";
import Fonts from "./components/pages/Landing/Fonts";
import Animation from "./components/pages/Landing/Animations";
import ModelsTextures from "./components/pages/Landing/ModelsTextures";
import PhotosImages from "./components/pages/Landing/PhotosImages";
import MusicSound from "./components/pages/Landing/MusicSound";
import Product from "./components/pages/Product";
import Upload from "./components/Upload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/fonts" component={Fonts} />
          <Route exact path="/animations" component={Animation} />
          <Route exact path="/modelstextures" component={ModelsTextures} />
          <Route exact path="/photosimages" component={PhotosImages} />
          <Route exact path="/musicsound" component={MusicSound} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/upload" component={Upload} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

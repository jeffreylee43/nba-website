import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Celtics from "./pages/celtics";
import Home from "./home";
import Navigation from "./Navigation";


// import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pages/celtics" component={Celtics} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;

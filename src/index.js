/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Login from './Login';
import Message from './Message';
import NavBar from './NavBar';
import Signup from './Signup';

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/message" component={Message} />
    </div>  
  </Router>
),
  document.getElementById('root')
);

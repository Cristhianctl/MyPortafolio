import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Nosotros from './pages/nosotros';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/nosotros" component={ Nosotros } exact />
      </Switch> 
    </Router>

  );
}

export default App;

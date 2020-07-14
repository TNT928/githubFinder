import React from 'react';
import Home from './Pages/Home';
import User from './users/user';
import NotFound from './Pages/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Alert from './alert';
import About from './Pages/about';
import Navbar from './navbar';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/Alertstate';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />{' '}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

import React, {Fragment} from 'react';
import Users from './users/Users';
import User from './users/user';
import Search from './users/search';
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
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                component= {User}
                
              />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
     
    </GithubState>
  );
};

export default App;

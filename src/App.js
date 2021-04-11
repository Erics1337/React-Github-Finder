import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';


import axios from 'axios';
import './App.css';

// Function turned into a class.  Extends component class
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);



  // Search Github users
  // Since is an arrow functin, call async before the parameter
  const searchUsers = async text => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  
      setUser(res.data.items);
      setLoading(false);
  };


  // Get single Github user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  
    setUser(res.data);
    setLoading(false);
  };
  

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  
    setRepos(res.data);
    setLoading(false);
  };


  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  
  // Show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };



    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={ alert } />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                  searchUsers={ searchUsers } 
                  clearUsers={ clearUsers } 
                  showClear={ users.length > 0 ? true : false }
                  setAlert={ showAlert }
                />
                <Users loading={ loading } users={ users } />
              </Fragment> 
            )} />
            <Route exact path='/about' component={About} />
            <Route 
              exact 
              path='/user/:login' 
              render={props => (
              <User 
                // ... is spread operator
                { ...props } 
                getUser={getUser}
                getUserRepos={getUserRepos} 
                user={user}
                repos={repos}
                loading={loading} />
            )} />
          </Switch>
          <div className='container'>

          </div>
        </div>
      </Router>
    );
  
}

export default App;

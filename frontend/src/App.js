import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/LandingPage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import Alert from './components/layout/Alert';
import Home from './components/home/Home';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './store';
import setTokenHeaderInfo from './utils/setTokenHeaderInfo';
import { loadUser } from './actions/auth';

const App = () => {
  // put the second parameter [arr of states] to run only once when component did mount
	// useEffect(() => {
	// 	if (localStorage.token) {
	// 		setTokenHeaderInfo(localStorage.token);
	// 	}
	// 	store.dispatch(loadUser());
	// }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Alert />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/profile" component={Users} />
            <PrivateRoute exact path="/account" component={Home} />
						<PrivateRoute exact path="/create-profile" component={CreateProfile} />
						<PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

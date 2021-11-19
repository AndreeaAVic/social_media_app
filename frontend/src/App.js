import LandingPage from './components/layout/LandingPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LandingPage />  
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route exact path="/profile">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

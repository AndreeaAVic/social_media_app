import MainCover from './components/layout/MainCover';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './components/layout/LoginPage';
import RegisterPage from './components/layout/RegisterPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <MainCover />  
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

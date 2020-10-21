import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import ChangeTask from "./components/ChangeTask";
import CreateTask from "./components/CreateTask";
import Profile from "./components/Profile";
import { MainPage } from './components/MainPage';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';


function App() {
  // const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>School in the Cloud</h1>
      <div className="navBar">
        <NavBar />
      </div>
      </header>

      <Switch>
     <PrivateRoute path='/profile' component={Profile} />
     <PrivateRoute path='/dashboard/change-task/:id' component={ChangeTask} />
     <PrivateRoute path='/dashboard/create-task' component={CreateTask} />
     <PrivateRoute path='/dashboard' component={Dashboard} />
     <Route exact path='/' component={MainPage} />
     
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

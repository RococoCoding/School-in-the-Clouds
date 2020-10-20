import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import ChangeTask from "./components/ChangeTask";
import CreateTask from "./components/CreateTask";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>School in the Cloud</h1>
      <div className="navBar">
        <NavBar />
      </div>
      </header>
      <RegisterForm />

      <Switch>
     <PrivateRoute path='/profile' component={Profile} />
     <PrivateRoute path='/loginform' component={LoginForm} />
     <PrivateRoute path='/dashboard' component={Dashboard} />
     <PrivateRoute path='/dashboard/change-task/:id' component={ChangeTask} />
     <PrivateRoute path='/dashboard/create-task' component={CreateTask} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

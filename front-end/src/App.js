import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import { NavBar } from "./components/NavBar";
import ChangeTask from "./components/ChangeTask";
import CreateTask from "./components/CreateTask";
import { Profile } from "./components/Profile";
import { MainPage } from './components/MainPage';
import {Admin} from './components/Admin';
import {Student} from './components/Student';
import {Volunteer} from './components/Volunteer';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';


function App() {
  // const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`
  return (
    <Router>
    <div className="App">
     
      <div className="navBar">
        <NavBar />
      </div>
  

      <Switch>
     <PrivateRoute exact path='/profile' component={Profile} />
     <PrivateRoute exact path='/admin/change-task/:id' component={ChangeTask} />
     <PrivateRoute exact path='/admin/create-task' component={CreateTask} />
     <PrivateRoute exact path='/admin' component={Admin} />
     <PrivateRoute exact path='/student' component={Student} />
     <PrivateRoute exact path='/volunteer' component={Volunteer} />
     <Route exact path='/' component={MainPage} />
     
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

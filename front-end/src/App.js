import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

import { NavBar } from "./components/NavBar";
import ChangeTodo from "./components/ChangeTodo";
import CreateTodo from "./components/CreateTodo";
import { Profile } from "./components/Profile";
import { MainPage } from './components/MainPage';
import Admin from './components/Admin';
import Student from './components/Student';
import Volunteer  from './components/Volunteer';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';



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
     <PrivateRoute exact path='/change-todo' component={ChangeTodo} />
     <PrivateRoute exact path='/todo-list' component={TodoList} />
     <PrivateRoute exact path='/create-todo' component={CreateTodo} />
     <PrivateRoute exact path='/admin' component={Admin} />
     <PrivateRoute exact path='/student' component={Student} />
     <PrivateRoute exact path='/volunteer' component={Volunteer} />
     <Route exact path='/login' component={LoginForm} />
     <Route exact path='/' component={MainPage} />
     
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

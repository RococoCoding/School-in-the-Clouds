import React from 'react';
import logo from './logo.svg';
import './App.css';

import RegisterForm from "./components/RegisterForm";
import CreateTask from "./components/CreateTask";



import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <RegisterForm />
        <CreateTask />

        <NavBar />

      </header>
    </div>
  );
}

export default App;

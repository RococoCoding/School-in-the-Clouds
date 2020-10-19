import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from "./components/RegisterForm";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterForm />
        <CreateTask />
      </header>
    </div>
  );
}

export default App;

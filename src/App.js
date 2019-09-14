import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import List from './components/list/list-container'
import Login from './components/login/login'

let loggedIn = false;

function App() {
  return (
    <div className="App">
      {loggedIn ? (<div>
        <Header/>
        <List/>
      </div>) : <Login/>}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import List from './components/list/list-container'


function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
    </div>
  );
}

export default App;

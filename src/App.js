import React from 'react';
import './App.css';
<<<<<<< HEAD
import Header from './components/header/header.component';
import List from './components/list/list-container'
import Signin from './components/signin/signin';
=======
>>>>>>> rrouter

import { Switch, Route } from 'react-router-dom'
import TodoApp from './components/todo-app/todo-app'
import Login from './components/login/login'
import Register from './components/login/register'
import ProtectedRoute from './components/protected-route'

//import Links from './components/Links';

//let loggedIn = false;

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Signin/>
      <Header/>
      <List/>
=======
        {/* <Links/> */}
        
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/todo-app' component={TodoApp} />
        <Route path='/register' component={Register} />
      </Switch>
>>>>>>> rrouter
    </div>
  );
}

export default App;

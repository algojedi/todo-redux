import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import TodoApp from './components/todo-app/todo-app'
import Login from './components/login/login'
import Register from './components/login/register'
import ProtectedRoute from './components/protected-route'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/todo-app' component={TodoApp} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;

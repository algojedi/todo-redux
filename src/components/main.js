import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TodoApp from './todo-app/todo-app'
import Login from './login/login'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/todo-app' component={TodoApp} />
            <Route path='/signin' component={Login} />
        </Switch>
    </main>
)

export default Main
import React from 'react'
import { Link } from 'react-router-dom'

// links that can be used to navigate between routes.
const Links = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/todo-app'>Enter</Link></li>
                <li><Link to='/signin'>Logout</Link></li>
            </ul>
        </nav>
    </header>
)

export default Links

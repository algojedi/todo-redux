import React from 'react';
import './list.css';
import { connect } from 'react-redux';
import Todo from "../todo-app/todo";

const List = ({ todos }) => {
    
    return ( 
            <ul>
                {   todos.map(todo => (           
                    <Todo key={todo.id} {...todo}/>
                ))}
            </ul>
        
        
    );
}
 
const mapStateToProps = state => ({ todos: state })

export default connect(mapStateToProps)(List);
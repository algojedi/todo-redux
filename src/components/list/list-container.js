import React from 'react';
import './list.css';
import { connect } from 'react-redux';
import Todo from "../todo-app/todo";

const List = ({ todos }) => {
    
    return ( 
            <div id='wrapper'>
                {   todos.map(todo => (           
                    <Todo key={todo.id} {...todo}/>
                ))}
            </div>
        
        
    );
}
 
const mapStateToProps = state => ({ todos: state })

export default connect(mapStateToProps)(List);
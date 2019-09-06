import React from 'react';
import './list.css';
import { connect } from 'react-redux';
import Todo from "../todo";

const List = ({ todos }) => {
    
    return ( 
    
            <ul>
                { todos.map(todo => (           
                <Todo key={todo.key} {...todo}/>
                ))}
            </ul>
        
        
    );
}
 
//const mapStateToProps = state => ({ todos: state.map(el => el.todo) })
const mapStateToProps = state => ({ todos: state })

export default connect(mapStateToProps)(List);
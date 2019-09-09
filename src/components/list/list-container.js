import React from 'react';
import './list.css';
import { connect } from 'react-redux';
import Todo from "../todo";

const List = ({ todos }) => {
    console.log('in the list, heres the todos:');
     console.log(todos);
    
    
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
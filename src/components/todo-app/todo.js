import React from "react";
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../actions/actions";
import './todo.css';

const Todo = ({ todo, dispatch, id, completed }) => {
    if (todo == null) { return null };
    return ( 
        <div className='item'> 
            <div    className='todo-wrapper'
                    onClick={() => dispatch(toggleTodo(id))}
                    style={{ textDecoration : completed ? 'line-through' : 'none'}}>
              {todo}
            </div>
            <Button onClick={() => dispatch(deleteTodo(id))} 
                    color='danger' 
                    className='delete'> &#10008;
            </Button>
        </div> )
}
 

export default connect()(Todo);
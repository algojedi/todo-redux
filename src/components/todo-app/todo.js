import React from "react";
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/actions";
import './todo.css';

const Todo = ({ todo, dispatch, id }) => {
    if (todo == null) { return null };
    return ( 
        <li className='item'> {todo} <span><Button onClick={() => dispatch(deleteTodo(id))} color='danger' className='delete'>&#10008;</Button></span></li> );
}
 

export default connect()(Todo);
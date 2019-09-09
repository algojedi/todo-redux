import React from "react";
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { deleteTodo } from "../actions/actions";

const Todo = ({ todo, dispatch, id }) => {
    if (todo == null) { return null };
    console.log('todokey in Todo compo: ' + id);

    return ( 
        <li> {todo} <span><Button onClick={() => dispatch(deleteTodo(id))} color='danger' className='delete'>&#10008;</Button></span></li> );
}
 

export default connect()(Todo);
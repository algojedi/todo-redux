import Header from '../header/header.component';
import List from "../list/list-container"
import React from 'react';
import { Button } from 'reactstrap';
import auth from "../auth";
import { connect } from "react-redux";
import { clearTodos } from "../../actions/actions";

const TodoApp = (props) => {

    const signoutBtn = {
        position: 'absolute',
        top: 50,
        right: 50
    }

    const clearBtn = {
        position: 'absolute',
        top: 50,
        right: 150
    }

    return ( 
        <div>
            <Button style = {signoutBtn}
                    color='link'
                    onClick={() => {
                        props.dispatch(clearTodos());
                        auth.logout(() => {
                            props.history.push("/");
                        })
                    }}>
            
                Sign out
            </Button>
            <Button style={clearBtn}
                color='danger'
                onClick={() => {
                    props.dispatch(clearTodos())
                }}>Clear</Button>
            <Header/>
            <List/>
        </div>
     );
}
 
export default connect()(TodoApp);
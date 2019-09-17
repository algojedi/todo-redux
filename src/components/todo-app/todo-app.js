import Header from '../header/header.component';
import List from "../list/list-container"
import React from 'react';
import { Button } from 'reactstrap';
import auth from "../auth";

const TodoApp = (props) => {

    const signoutBtn = {
        position: 'absolute',
        top: 50,
        right: 50
    }

    return ( 
        <div>
            <Button style = {signoutBtn}
                    color='link'
                    onClick={() => {
                        auth.logout(() => {
                            props.history.push("/");
                        })
                    }}>
            
                Sign out
            </Button>
            <Header/>
            <List/>
        </div>
     );
}
 
export default TodoApp;
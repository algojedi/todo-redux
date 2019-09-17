import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';
import auth from '../auth';

const Login = (props) => {
    return ( 
        <div id='formWrapper'>
            <h1>Sign in</h1>
            <hr/>
            <Form id='form'>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="pswrd">Password</Label>
                    <Input type="password" name="password" id='pswrd' placeholder="password" />
                </FormGroup>
                <Button color='primary' 
                        id='signin-btn'
                        onClick={() => {
                                    auth.login(() => {
                                        props.history.push("/todo-app");
                                    })
                                }}>
                        Sign in
                </Button>


                <Button color='default' 
                        id='reg-btn'
                        onClick={() => { props.history.push("/register") }}>
                        Register
                </Button>
            </Form>
            
        </div>
     );
}
 
export default Login;
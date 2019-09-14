import React from "react";
//import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './login.css';
const Login = () => {
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
                <Button color='primary'>Sign in</Button>
                <a href='#' id='register'>Register</a>
            </Form>
            
        </div>
     );
}
 
export default Login;
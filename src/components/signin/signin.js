import React from "react";
import { FormGroup, Button,Input, Label } from 'reactstrap';
import './signin.css';

const Signin = () => {

    return (
        <div id='formWrapper'>
            <h1>Sign in</h1>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button color='primary'>Sign in</Button>
            <a href='#'>
                <p id='register'>Register</p>
            </a>
        </div>)
       
}


export default Signin;
import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';
import auth from '../auth';

const Register = (props) => {
    return (
        <div id='formWrapper'>
            <h1>Register</h1>
            <hr />
            <Form id='form'>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="pswrd">Password</Label>
                    <Input type="password" name="password" id='pswrd' placeholder="password" />
                </FormGroup>
                <Button color='primary'
                    onClick={() => {
                        auth.login(() => {
                            props.history.push("/todo-app");
                        })
                    }}>
                
                    Register
                </Button>
                
            </Form>

        </div>
    );
}

export default Register;
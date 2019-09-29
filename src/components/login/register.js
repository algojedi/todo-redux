import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';
import auth from '../auth';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        //let failedToReg = false;
        this.handleChange = this.handleChange.bind(this);
        let failedAttempt = false;
        
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    } 
    render() { 
        return ( 

        <div id='formWrapper'>
            <h1>Register</h1>
            <hr />
            <Form id='form'>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input  type="text" 
                            name="name" 
                            onChange={this.handleChange}
                            id="name"   
                            value={this.state.name}
                            placeholder="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input  type="email" 
                            name="email" 
                            value={this.state.email}
                            id="regEmail" 
                            onChange={this.handleChange}
                            placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="pswrd">Password</Label>
                    <Input  type="password" 
                            name="password" 
                            onChange={this.handleChange}
                            id='regPassword' 
                            value={this.state.password}
                            placeholder="password" />
                </FormGroup>
                <Button color='primary'
                    onClick={() => {
                        auth.register(() => {
                            this.props.history.push("/todo-app");
                        }, this.state)

                        setTimeout(() => {
                            if (!auth.isAuthenticated()) {
                                this.failedAttempt = true;
                                this.setState({
                                    email: '',
                                    name: '',
                                    password: ''
                                });
                            } else { 
                                this.failedAttempt = false;
                            }
                        }, 500);

                    }}>
                    Register
                </Button>
                <Button color='default'
                    id='login-btn'
                    onClick={() => { this.props.history.push("/") }}>
                    Sign in
                </Button>          
            </Form>
                {this.failedAttempt &&
                    <p style={{ color: 'red', margin: '10px' }}>That profile already exists</p>}
        </div>
         );
    }
}
 

export default Register;
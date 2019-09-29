import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';
import auth from '../auth';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        }
        let failedAttempt = false;
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    } 

    render() { 

        return ( 
        <div id='formWrapper'>
            <h1>Sign in</h1>
            <hr/>
            <Form id='form'>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input  type="email" 
                            name="email" 
                            id="loginEmail" 
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="pswrd">Password</Label>
                    <Input  type="password" 
                            name="password" 
                            id='loginPassword' 
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.handleChange} />
                </FormGroup>
                <Button color='primary' 
                        id='signin-btn'
                        onClick={() => {
                            
                                    auth.login(() => {
                                        this.props.history.push("/todo-app");
                                    }, this.state)
                                    
                                    setTimeout(() => {
                                        if(!auth.isAuthenticated()) {
                                            this.failedAttempt = true;
                                            this.setState({
                                                email: '',
                                                password: ''
                                            });
                                        } else {
                                            this.failedAttempt = false;
                                        }
                                    }, 500);
                                    
                                }}>
                        Sign in
                </Button>
                <Button color='default' 
                        id='reg-btn'
                        onClick={() => { this.props.history.push("/register") }}>
                        Register
                </Button>
            </Form>
                {this.failedAttempt && 
                <p style={{ color: 'red', margin: '10px'}}>Unknown email or password</p>}
                
        </div>
         );
    }
}

export default Login;


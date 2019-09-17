import React from 'react';
import './header.css';
import { addTodo } from "../../actions/actions";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' }

    }
    
    handleClick = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.dispatch(addTodo(this.state.input));
        this.setState({ input: '' });
        
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({ input: e.target.value });
        
    }
    render() { 
        return ( 
            <div className='title'>
                <h1>Todo List</h1>
                <div className="col-4 header">
                    <Input type='text' value={this.state.input} onChange={this.handleChange} placeholder='enter here' />
                    <Button color='primary' onClick={this.handleClick} >Submit</Button>
                </div>
            </div>
         );
    }
}

export default connect()(Header);
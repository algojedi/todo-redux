import React from 'react';
import './header.css';
import { addTodo } from "../../actions/actions";
import { connect } from 'react-redux';

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
            <div>
                <input type='text' value={this.state.input} onChange={this.handleChange} placeholder='enter here' />
                <button type='submit' onClick={this.handleClick} >submit</button>
            </div>
         );
    }
}

export default connect()(Header);
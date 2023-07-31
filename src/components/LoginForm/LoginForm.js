import React, { Component } from 'react';
import style from './LoginForm.module.scss';
import * as yup from 'yup';

const SCHEMA = yup.object ({
    firstName: yup.string().min(2).max(30).required(),
    lastName: yup.string().min(2).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
});

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ...initialState
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        console.log(SCHEMA.isValidSync(this.state))
    }

    render() {
        const {firstName, lastName, email, password} = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    First Name:
                    <input type="text" value={firstName} name='firstName' onChange={this.changeHandler}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} name='lastName' onChange={this.changeHandler}/>
                </label>
                <label>
                    Email:
                    <input type="text" value={email} name='email' onChange={this.changeHandler}/>
                </label>
                <label>
                    Password:
                    <input type="text" value={password} name='password' onChange={this.changeHandler}/>
                </label>
                <button type='submit'>Submit</button>    
            </form>
        );
    }
}

export default LoginForm;

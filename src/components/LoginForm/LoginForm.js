import React, { Component } from 'react';
import style from './LoginForm.module.scss';
import { SCHEMA } from '../../schemas';

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
            ...initialState,
            error: null
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        try {
            this.setState({
                error: null
            });
            SCHEMA.validateSync(this.state)
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        const {firstName, lastName, email, password, error} = this.state;

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
                {error && <p className={style.error}>{error.message}</p>}  
            </form>
        );
    }
}

export default LoginForm;

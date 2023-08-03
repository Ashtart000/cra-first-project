import React, {useState, useReducer} from 'react';
import { reducer }  from '../../reducers/index';
import CONSTANTS from '../../constants';
import styles from './Style.module.scss';
const {ACTIONS} = CONSTANTS


const RegistrationForm = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const inputChangeHandler = ({target: {value, name}}) => {
        dispatch({
            type: ACTIONS.INPUT_CHANGE,
            payload: {
                value,
                name
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const {firstName, lastName, email, password} = state;

    return (
        <form onSubmit={submitHandler}>
            <label>
                Name
                <input type='text' name='firstName' value={firstName} onChange={inputChangeHandler}/>
            </label>
            <label>
                Last Name
                <input type='text' name='lastName' value={lastName} onChange={inputChangeHandler}/>
            </label>
            <label>
                Email
                <input type='text' name='email' value={email} onChange={inputChangeHandler}/>
            </label>
            <label>
                Password
                <input type='password' name='password' value={password} onChange={inputChangeHandler}/>
            </label>
            <button type='submit'>Registration</button>
        </form>
    );
}

export default RegistrationForm;

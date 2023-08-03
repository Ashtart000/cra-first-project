import React, {useState, useReducer} from 'react';
import styles from './Style.module.scss'

const RegistrationForm = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    function reducer(state,action) {
        switch(action.type) {
            case 'INPUT_CHANGE': {
                const {name, value} = action.payload
                return {
                    ...state,
                    [name]: 
                    value
                }
            }
            default: {
                return state
            }

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const inputChangeHandler = ({target: {value, name}}) => {
        dispatch({
            type: 'INPUT_CHANGE',
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

import React from 'react';
import './style.css';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class SingInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // тут можуть бути валідації перед запитом на сервер
        console.log(this.state); //тут може бути запит на сервер
    }

    resetHandler = (event) => {
        this.setState({
            email: '',
            password: ''
        })
    }

    changeEmailHandler = (event) => {
        // тут можуть бути якісь валідації для динамічної перевірки даних від користувача
        this.setState({
            email: event.target.value
        })
    }

    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const {email, password} = this.state;

        return (
        <form className='form-wrapper' onSubmit={this.submitHandler} onReset={this.resetHandler}>
            <label>
                Your email:
                <input type='email' name='email' onChange={this.changeEmailHandler} value={email}/>
            </label>
            <label>
                Password:
                <input type='password' name='password' onChange={this.changePasswordHandler} value={password}/>
            </label>

            <button type='submit'>Send form</button>
            <button type='reset'>Clear form</button>
        </form>
    )
    }
}

export default SingInForm;
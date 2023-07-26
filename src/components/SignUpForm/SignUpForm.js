import React from "react";
import './style.css';
import SignUpHello from "./SignUpHello";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            city: '',
            birthday: '',
            favoriteColor: '',
            isNameValid: true
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const {name, phone, city, isNameValid} = this.state;

        if(name.length === 0) {
            this.setState({
                isNameValid: false
            })
        }
        if(name.length > 1) {
            this.setState({
                isNameValid: true
            })
        }
    }

    resetHandler = (event) => {
        this.setState({
            name: '',
            phone: '',
            city: '',
            birthday: '',
            favoriteColor: ''
        })
    }

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const {name, phone, city, birthday, favoriteColor, isNameValid} = this.state;

        return (
            <>
            <form className='form-wrapper' onSubmit={this.submitHandler} onReset={this.resetHandler}>
                <label>
                    Name:
                    <input className={isNameValid ? '' : 'invalid'} type="text" name="name" onChange={this.universalChangeHandler} value={name}/>
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" onChange={this.universalChangeHandler} value={phone}/>
                </label>
                <label>
                    City:
                    <input type="text" name="city" onChange={this.universalChangeHandler} value={city}/>
                </label>
                <label>
                    Birthday:
                    <input type="date" name="birthday" onChange={this.universalChangeHandler} value={birthday}/>
                </label>
                <label>
                    Favorite color:
                    <input type="color" name="favoriteColor" onChange={this.universalChangeHandler} value={favoriteColor}/>
                </label>

                <button type='submit'>Send form</button>
                <button type='reset'>Clear form</button>
                
            </form>
            <SignUpHello text={name}/>
            </>
        )
    }
}

export default SignUpForm;
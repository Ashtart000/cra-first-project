import React, { Component } from 'react';
import styles from '../ToDoListStyle.module.css'

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            isInputValid: true
        }
    }

    changeHandler = ({target: {value, name}}) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState ({
                [name]: value,
                isInputValid: true
        })
        }
        
    }

    submitHandler = (event) => {
        const {props: {sendData}, state: {todo}} = this;
        event.preventDefault();
        sendData(todo);
        this.setState({
            todo: ''
        })
    }
    
    render() {
        const {todo, isInputValid} = this.state;
        // const className = styles.input + (isInputValid ? '' : ` ${styles['invalid-input']}`);
        const className = cx({
            [styles.input]: true,
            [styles['invalid-input']]: isInputValid === false // або !isInputValid
        })

        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type='text' 
                value={todo} 
                name='todo' 
                onChange={this.changeHandler} 
                className={className}
                />
                <button type='submit'>Add task</button>
            </form>
        );
    }
}

function cx(objectClassNames) {
    const cort = Object.entries(objectClassNames);
    const filteredArray = cort.filter(([className, condition]) => condition);
    const MapArray = filteredArray.map(([className, condition]) => className);
    return MapArray.join(' ');
}
// 'className1 className2'

/*
objectClassNames = {
    className1: true
    className2: true
    className3: false
}
[[className1, true], [className2, true], [className3, false]] =>
[[className1, true], [className2, true]] =>
[className1, className2] =>
'className1 className2'
*/

export default ToDoForm;

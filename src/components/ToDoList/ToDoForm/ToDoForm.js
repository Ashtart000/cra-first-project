import React, { Component } from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState ({
            [name]: value
        })
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
        const {todo} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' value={todo} name='todo' onChange={this.changeHandler}/>
                <button type='submit'>Add task</button>
            </form>
        );
    }
}

export default ToDoForm;

import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";
//import './style.css'
import styles from './ToDoListStyle.module.css'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listArray: [
            {
                id: 1,
                text: "go to party"
            },
            {
                id: 2,
                text: "meet friends"
            },
            {
                id: 3,
                text: "have a walk"
            },
        ]}
    }

    createList() {
        const { listArray } = this.state;
        return listArray.map((list) => <ToDoItem key={list.id} text={list.text} id={list.id} delCallback={(id) => {this.removeTask(id)}}/>)
    }

    removeTask(listIdToRemove) {
        const { listArray } = this.state;
        const filteredArray = listArray.filter((list) => list.id !== listIdToRemove);
        this.setState({
            listArray: filteredArray
        })
    }

    formHandler = (text) => {
        const {listArray} = this.state;

        const newObj = {
            id: listArray.length + 1,
            text
        }

        const newListArray = [...listArray, newObj];

        this.setState({
            listArray: newListArray
        })
    }

    render() {
        return (
            <>
                <h1>To Do List</h1>
                <ToDoForm sendData={this.formHandler}/>
                <ul className={styles.container}>
                    {this.createList()}
                </ul>
            </>
        )
    }
}

export default ToDoList
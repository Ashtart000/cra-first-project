import React from "react";
import ToDoItem from "./ToDoItem";

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

    render() {
        return (
            <>
                <h1>To Do List</h1>
                <ul>
                    {this.createList()}
                </ul>
            </>
        )
    }
}

export default ToDoList
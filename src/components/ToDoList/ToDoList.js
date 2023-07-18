import React from "react";

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
        const {listArray} = this.state;
        return listArray.map((list) => <li key={list.id}>{list.text}</li>)
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
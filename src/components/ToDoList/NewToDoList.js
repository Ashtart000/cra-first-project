import { useState }from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";
//import './style.css'
import styles from './ToDoListStyle.module.css'

const NewToDoList = () => {
    const [listArray, setListArray] = useState([{
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
    }]);    

    const createList = () => {
        return listArray.map((list) => 
        <ToDoItem key={list.id} text={list.text} id={list.id} delCallback={(id) => {removeTask(id)}}/>)
    }

    const removeTask = (listIdToRemove) => {
        const filteredArray = listArray.filter((list) => list.id !== listIdToRemove);
        setListArray(filteredArray)
    }

    const formHandler = (text) => {
            const newObj = {
            id: listArray.length + 1,
            text
        }

        const newListArray = [...listArray, newObj];

        setListArray(newListArray)
    }

    
        return (
            <>
                <h1>To Do List</h1>
                <ToDoForm sendData={formHandler}/>
                <ul className={styles.container}>
                    {createList()}
                </ul>
            </>
        )
}


export default NewToDoList
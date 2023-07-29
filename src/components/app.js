import React from "react";
//import ToDoList from "./ToDoList/ToDoList";
//import UserList from "./UserList/UserList";
//import List from "./List/List";
import FlexContainer from "./FlexContainer/FlexContainer";

function App() {

    return(
        <FlexContainer flexDirection='row' justifyContent='center' alignItems='stretch'>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </FlexContainer>
    )
}

export default App;

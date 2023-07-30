import React from "react";
import Tree from "./Tree/Tree";
import { UserContext } from "../contexts/userContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            }
        }
    }
    

    render() {
        return(
            // <Tree user={this.state.user}/>
            <UserContext.Provider value={this.state.user}>
                <Tree />
            </UserContext.Provider>
        )
    }
}

export default App;



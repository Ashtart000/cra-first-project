import React from "react";
import TreeWithTheme from "./Tree/Tree";
import { UserContext } from "../contexts/userContext";
import { ThemeContext } from "../contexts/themeContext";
import CONSTANTS from "../constants";
const { THEMES } = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            },
            theme: THEMES.LIGHT
        }
    }

    logOut = () => {
        this.setState({
            user: []
        })
    } 
    
    setTheme = (theme) => {
        this.setState({
            theme
        })
    }

    render() {
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={{
                theme,
                setTheme: this.setTheme
            }}>
                <UserContext.Provider value={{
                    user,
                    logOut: this.logOut
                }}>
                    <TreeWithTheme />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

export default App;



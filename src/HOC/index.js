import { ThemeContext } from "../contexts/themeContext"
import { UserContext } from "../contexts/userContext"

export const withTheme = (Component) => (props) => { // High Order Component, HOC
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => {
                return <Component theme={theme} setTheme={setTheme} {...props} />
            }}
        </ThemeContext.Consumer>
    )
}

export const withUser = (Component) => (props) => {
    return (
        <UserContext.Consumer>
            {({ user, logOut }) => {
                return <Component user={user} logOut={logOut} {...props}/>
            }}
        </UserContext.Consumer>
    )
}
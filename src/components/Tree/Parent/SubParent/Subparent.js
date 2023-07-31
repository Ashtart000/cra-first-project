import React from 'react';
import Child from './Child/Child';
import { withTheme } from '../../../../HOC';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../constants';
const { THEMES } = CONSTANTS;

const Subparent = (props) => {
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    return (
        <div style={{border: '2px solid black'}}>
            SubParent
            <p>{props.user.firstName} {props.user.lastName}</p>
            <button onClick={() => {props.setTheme(nextTheme)}}>Click to change theme</button>
            <Child />
        </div>
    )
    
        
        // <UserContext.Consumer>
        //     {({user, logOut}) => {
        //         return (
        //             <ThemeContext.Consumer>
        //                 {({theme, setTheme}) => {
        //                     return (
        //                         <SubparentWithTheme theme={theme} user={user} setTheme={setTheme}/>
        //                     )    
        //     }}
        // </ThemeContext.Consumer>
        //         )
        //     }}
        // </UserContext.Consumer>
    
}

const SubparentWithTheme = (props) => {
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                const SubparentWithTheme = withTheme(Subparent);
                return (
                    <SubparentWithTheme user={user} logOut={logOut} />
                )
            }}
        </UserContext.Consumer>
    )
}

export default SubparentWithTheme;


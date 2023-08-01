import React, { useContext} from 'react';
import Child from './Child/Child';
import CONSTANTS from '../../../../constants';
import { UserContext } from '../../../../contexts/userContext';
import { ThemeContext } from '../../../../contexts/themeContext';
const { THEMES } = CONSTANTS;

const Subparent = () => {
    
    const {user} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (
        <div style={{border: '2px solid black'}}>
            SubParent
            <p>{user.firstName} {user.lastName}</p>
            <button onClick={() => {setTheme(nextTheme)}}>Click to change theme</button>
            <Child />
        </div>
    )    
}


export default Subparent;


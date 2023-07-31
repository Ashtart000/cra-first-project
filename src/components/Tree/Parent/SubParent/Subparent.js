import React from 'react';
import Child from './Child/Child';
import { withTheme, withUser } from '../../../../HOC';
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
}

// const SubParentWithTheme = withTheme(Subparent);
// const SubParentWithThemeWithUser = withUser(SubParentWithTheme);

// export default SubParentWithThemeWithUser;

export default withUser(withTheme(Subparent));



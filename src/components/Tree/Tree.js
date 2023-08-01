import React, { useContext } from 'react';
import cx from 'classnames';
import Parent from './Parent/Parent';
import style from './Tree.module.css'
import { ThemeContext } from '../../contexts/themeContext';
// import { withTheme } from '../../HOC';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Tree = (props) => {
    const {theme} = useContext(ThemeContext);
    const classNames = cx(style.container, {
        //[style.container]: true,
        [style.lightTheme]: theme === THEMES.LIGHT,
        [style.darkTheme]: theme === THEMES.DARK
    })                                

    return (
        <div className={classNames}>
            Tree
            <Parent />
        </div>
    )
}

export default Tree;


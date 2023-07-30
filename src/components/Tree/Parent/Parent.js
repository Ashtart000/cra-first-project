import React from 'react';
import Subparent from './SubParent/Subparent';

const Parent = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
            Parent
            <Subparent />
        </div>
    );
}

export default Parent;

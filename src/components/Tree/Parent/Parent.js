import React from 'react';
import Subparent from './SubParent/Subparent';

const Parent = (props) => {
    return (
        <div>
            Parent
            <Subparent />
        </div>
    );
}

export default Parent;

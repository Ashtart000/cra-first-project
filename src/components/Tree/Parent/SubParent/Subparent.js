import React from 'react';
import Child from './Child/Child';

const Subparent = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
            SubParent
            <Child />
        </div>
    );
}

export default Subparent;

import React from 'react';
import InnerChild from './InnerChild/InnerChild';

const Child = (props) => {
    return (
        <div>
            Child
            <InnerChild />
        </div>
    );
}

export default Child;

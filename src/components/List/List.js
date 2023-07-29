import React from "react";
import Child from "./Child";

class List extends React.Component {
    
    render() {
        return (
            <div>
                <Child>
                    <h1>Props Children</h1>
                    <p>Hello, Child!</p>
                </Child>
            </div>
        );
    }
}

export default List;

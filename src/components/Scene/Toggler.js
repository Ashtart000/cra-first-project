import React from "react";

function Toggler(props) {
    
    const clickHandler = () => {
        props.changeParentState();
    }

        return (
            <button onClick={() => { clickHandler() }}>{props.buttonText}</button>
        )
}

export default Toggler
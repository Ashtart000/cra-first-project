import React from "react";

class Toggler extends React.Component {
    
    toggler() {
        this.props.changeParentState();
    }

    render() {
        return (
            <button onClick={() => {this.toggler()}}>{this.props.buttonText}</button>
        )
    }
}

export default Toggler
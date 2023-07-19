import React from "react";

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }
    }

    toggler() {
        this.setState({
          isOn: !this.state.isOn
        });
        this.props.changeParentState()
    }

    render() {
        const buttonText = this.state.isOn ? 'Off' : 'On';
        return (
            <button onClick={() => {this.toggler()}}>{buttonText}</button>
        )
    }
}

export default Toggler
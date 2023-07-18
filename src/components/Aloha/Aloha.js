import React from "react"

class Aloha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGreeting: true
        }
    }

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        //const {isGreering} = this.state;
        const greetingText = this.state.isGreeting ? 'Hello' : 'Bye';
        return <h1 onClick={() => {this.clickHandler()}}>{greetingText} {this.props.name}</h1>;
    }
}

export default Aloha
import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor');

        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            const { count } = this.state;
            this.setState({
                count: count + 1
            })
            console.log('HELLO FROM INTERVAL');
        }, 1000)
    }

    componentDidMount() {
        this.start()
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('componnetDidUpdate');
    }

    componentWillUnmount() {
        console.log('I will die');
        clearInterval(this.intervalId);
    }

    render() {
        console.log('render');
        return (
            <>
                <h1>{this.state.count}</h1>
            </>
        )
    }
}

export default Counter
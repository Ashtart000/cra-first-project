import React from 'react';
import CounterFunction from './Counter'

class CounterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMount: true
        }
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({isMount: !this.state.isMount})}>Unmount Counter</button>
                {this.state.isMount ? <CounterFunction /> : null}
            </>
        )
    }
}

export default CounterPage;
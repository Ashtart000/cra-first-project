import React, { Component } from 'react';

class TVLoader extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tv: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.load();
    }
    
    load = () => {
        fetch('./tv.json')
        .then((response) => response.json())
        .then((tv) => {
            this.setState({
                tv
            })
        })
        .catch((error) => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const {tv, isLoading, error} = this.state;
        return (
            <>
                {isLoading && <div>Loading...</div>}
                {error && <div>{error.message}</div>}
                <ul>
                    {tv.map((tv) => 
                        <li key={`${Date.now()} ${tv.brand} ${tv.model}`}>{tv.brand} - {tv.model} - {tv.price}</li>
                    )}
                </ul>
            </>
        );
    }
}

export default TVLoader;
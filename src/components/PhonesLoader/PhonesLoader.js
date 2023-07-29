import React, { Component } from 'react';

class PhonesLoader extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phones: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.load();
    }
    
    load = () => {
        fetch('./phones.json')
        .then((response) => response.json())
        .then((phones) => {
            this.setState({
                phones
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
        const {phones, isLoading, error} = this.state;
        return (
            <>
                {isLoading && <div>Loading...</div>}
                {error && <div>{error.message}</div>}
                <ul>
                    {phones.map((phone) => 
                        <li key={`${Date.now()} ${phone.brand} ${phone.model}`}>{phone.brand} - {phone.model} - {phone.price}</li>
                    )}
                </ul>
            </>
        );
    }
}

export default PhonesLoader;

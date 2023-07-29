import React, { Component } from 'react';

class DataProvider extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.load();
    }
    
    load = () => {
        //this.props.loadData()
        this.props.children[0]()
        .then((data) => {
            this.setState({
                data
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
        //return this.props.renderData(this.state);
        return this.props.children[1](this.state);
    }
}

export default DataProvider;
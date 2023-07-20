import React from "react";
import Toggler from "./Toggler";
import './style.css';
import Indicator from "./Indicator";

class Scene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLight: true
        }
    }

    toggleScene() {
        this.setState({
            isLight: !this.state.isLight
        })
    }
    
    render() {
        const {isLight} = this.state;
        return (
            <div className={isLight ? 'scene-on' : 'scene-off'}>
                <Toggler buttonText={isLight ? 'Off' : 'On'} changeParentState={() => {this.toggleScene()}}/>
                <Indicator text={isLight ? 'Light is on' : 'Light is off'}/>
            </div>
        )
    }
}

export default Scene
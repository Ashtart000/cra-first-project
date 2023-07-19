import React from "react";
import Toggler from "./Toggler";
import './style.css';

class Scene extends React.Component {
    
    render() {
        return (
            <div className="scene-on">
                <Toggler />
            </div>
        )
    }
}

export default Scene
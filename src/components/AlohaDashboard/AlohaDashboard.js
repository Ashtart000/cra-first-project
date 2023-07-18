import React from "react";
import Aloha from '../Aloha/Aloha';

class AlohaDashboard extends React.Component {
    render () {
        return (
        <>
        <Aloha name="Alex"/>
        <Aloha name="Anna"/>
        <Aloha name="Masha"/>
        </>
        )
    }
}

export default AlohaDashboard;
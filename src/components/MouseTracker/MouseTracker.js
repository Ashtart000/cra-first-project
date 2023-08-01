import React, { useState, useEffect } from 'react';

const MouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
        counter: 0
    })

    const clickHandler = () => {
        setCoordinates((previousState) => {
            return {
                ...previousState,
                counter: coordinates.counter + 1
            }
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return () => {
            window.removeEventListener('mousemove', tracker);
        }
    }, [])
    // useEffect(() => {// code}, [])  --->>> componentDidMount
    // useEffect(() => {// code}, [//dependecy/dependecies])  --->>> componentDidUpdate
    /* useEffect(() => {
        // code
        return () => {}   --->>> componentWillUnmount
    }, []) */

    const tracker = (event) => {
        setCoordinates((previousState) => {
            return {
                ...previousState,
                x: event.clientX,
                y: event.clientY
            }
        })
    }

    return (
        <div onClick={clickHandler} style={{backgroundColor: 'black', color: 'white'}}>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <p>Counter: {coordinates.counter}</p>
        </div>
    );
}

export default MouseTracker;


/*
// Як працює setState у класовій компоненті
this.state = { // previous state
    x: 0,
    y: 0,
    counter: 0
}
this.setState({ // new state
    counter: this.state.counter + 1
})
{...previousState, ...newState}
->
{x: 0, y: 0, counter: 1}
--->>> новий стан доповнюється попереднім
// як працює хуковий setState (у функціональній компоненті)
previousState = {
    x: 0,
    y: 0,
    counter: 0
}
setState({ // new state
    counter: counter + 1
})
{...newState}
->
{counter: NaN}
--->>> поточний стан не доповнюється попереднім
+ ми втрачаємо змінні стану
*/
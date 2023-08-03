import React, { useState, useEffect } from 'react';

const useMouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return () => {
            window.removeEventListener('mousemove', tracker);
        }
    }, [])

    const tracker = (event) => {
        setCoordinates({
                x: event.clientX,
                y: event.clientY
            }
        )
    }

    return (
        {coordinates}
    );
}

export default useMouseTracker;

import React, { useEffect, useState } from "react";

const CounterFunction = () => {
    const {count, setCount} = useState(0);
    const {intervalId, setIntervalId} = useState(null);
 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => +1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

        return (
            <>
                <h1>{count}</h1>
            </>
        )
}

export default CounterFunction
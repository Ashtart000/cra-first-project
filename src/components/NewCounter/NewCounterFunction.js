import React, { useState } from 'react';

const NewCounterFunction = (props) => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCounter(counter + step);
    }

    const changeHandler = ({target: {value}}) => {
        setStep(Number(value))
    }

    return (
        <div>
            {counter}
            <input type='number' name='step' onChange={changeHandler} value={step} />
            <button onClick={increment}>+</button>
        </div>
    );
}

export default NewCounterFunction;

// Хуки , Hooks // 16 React // 2018
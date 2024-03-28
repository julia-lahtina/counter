import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';



function App() {

    let minValue = 0;
    let maxValue = 5;

    const [maxInputValue, setMaxValue] = useState<number>(maxValue)
    const [startValue, setStartValue] = useState<number>(minValue)
    const [counter, setCounter] = useState(startValue)



    useEffect(() => {
        localStorage.setItem('max value', JSON.stringify(maxInputValue));
        localStorage.setItem('start value', JSON.stringify(startValue));
    }, [maxInputValue, startValue])



    const setValues = () => {
        setCounter(startValue)
    }


    const getIncreaseCounter = () => {
        setCounter(counter + 1)
        }

    const getResetCounter = () => {
        setCounter(startValue)
    }


    return (
        <div className="App">

            <Settings
                counter={counter}
                maxInputValue={maxInputValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setValues={setValues}
            />

            <Counter
                getIncreaseCounter={getIncreaseCounter}
                getResetCounter={getResetCounter}
                counter={counter}
                maxInputValue={maxInputValue}
                startValue={startValue}
            />

        </div>
    );
}

export default App;

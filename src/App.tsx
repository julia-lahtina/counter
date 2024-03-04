import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

export type CounterType = {
    getIncreaseCounter: () => void
    getResetCounter: () => void
    counter: number
    minValue: number
    maxValue: number
    maxInputValue: number
    startValue: number
    setMaxValue: (maxInputValue: number) => void
    setStartValue: (startValue: number) => void
    setValues: () => void
    isFocused: boolean
    setIsFocused: (isFocused: boolean) => void
}


function App() {

    let minValue = 0;
    let maxValue = 5;

    const [maxInputValue, setMaxValue] = useState<number>(maxValue)
    const [startValue, setStartValue] = useState<number>(minValue)
    const [counter, setCounter] = useState(startValue)
    const [isFocused, setIsFocused] = useState<boolean>(false)


    useEffect(() => {
        let startValueAsString = localStorage.getItem('start value');
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString);
            setStartValue(newStartValue)
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('max value', JSON.stringify(maxInputValue));
        localStorage.setItem('start value', JSON.stringify(startValue));
    }, [maxInputValue, startValue])


    const setValues = () => {
        setCounter(startValue)
       // setMaxValue(maxInputValue)
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
                getIncreaseCounter={() => {
                }}
                getResetCounter={() => {
                }}
                counter={counter}
                minValue={minValue}
                maxValue={maxValue}
                maxInputValue={maxInputValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setValues={setValues}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
            />

            <Counter
                getIncreaseCounter={getIncreaseCounter}
                getResetCounter={getResetCounter}
                counter={counter}
                maxValue={maxValue}
                minValue={minValue}
                maxInputValue={maxInputValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setValues={setValues}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
            />

        </div>
    );
}

export default App;

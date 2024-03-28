import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from './components/settings/Settings';


function App() {

    const savedCounter = JSON.parse(localStorage.getItem('counter') || '0');
    const savedMaxValue = JSON.parse(localStorage.getItem('max value') || '5');
    const savedStartValue = JSON.parse(localStorage.getItem('start value') || '0');


    const [maxInputValue, setMaxValue] = useState<number>(savedMaxValue)
    const [startValue, setStartValue] = useState<number>(savedStartValue)
    const [counter, setCounter] = useState(savedCounter)
    const [valueIsChanged, setValueIsChanged] = useState(false)


    useEffect(() => {
        localStorage.setItem('max value', JSON.stringify(maxInputValue));
        localStorage.setItem('start value', JSON.stringify(startValue));
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [startValue, maxInputValue, counter])


    const getIncreaseCounter = () => {
        setCounter(counter + 1)
    }
    const setValues = () => {
        setCounter(startValue)

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

import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from './components/settings/Settings';
import {counterReducer, getIncreaseCounterCreator, startValueCreator} from './redux/counterReducer';

export type SavedValuesType = { savedStartValue: number, savedMaxValue: number }


const savedCounter = +JSON.parse(localStorage.getItem('counter') || '0');
const savedMaxValue = +JSON.parse(localStorage.getItem('max value') || '5');
const savedStartValue = +JSON.parse(localStorage.getItem('start value') || '0');

function App() {


    const [savedValues, setSavedValues] = useState<SavedValuesType>({savedMaxValue, savedStartValue})

    const [maxInputValue, setMaxValue] = useState<number>(savedValues.savedMaxValue)

    const [startValue, setStartValue] = useState<number>(savedValues.savedStartValue)

    const [counter, dispatchCounter] = useReducer(counterReducer, savedCounter)


    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter])


    const getIncreaseCounter = () => {
        dispatchCounter(getIncreaseCounterCreator())
    }
    const setValues = () => {
        localStorage.setItem('max value', JSON.stringify(maxInputValue));
        localStorage.setItem('start value', JSON.stringify(startValue));
        setSavedValues({savedMaxValue: maxInputValue, savedStartValue: startValue})
        dispatchCounter(startValueCreator(startValue))
    }
    const getResetCounter = () => {
        dispatchCounter(startValueCreator(startValue))
    }

    return (
        <div className="App">

            <Settings
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
                savedMaxValue={savedMaxValue}
                savedStartValue={savedStartValue}
                savedCounter={savedCounter}
                savedValues={savedValues}
            />

        </div>
    );
}

export default App;

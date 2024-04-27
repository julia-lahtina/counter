import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from './components/settings/Settings';
import {
    counterReducer,
    getIncreaseCounterCreator,
    resertValueCreator,
    setStartValueCreator
} from './redux/counterReducer';
import {savedValuesReducer, setValuesCreator} from './redux/savedValuesReducer';
import {maxInputValueReducer} from './redux/maxInputValueReducer';
import {startInputValueReducer} from './redux/startInputValueReducer';

export type SavedValuesType = { savedStartValue: number, savedMaxValue: number }


const savedCounter = +JSON.parse(localStorage.getItem('counter') || '0');
const savedMaxValue = +JSON.parse(localStorage.getItem('max value') || '5');
const savedStartValue = +JSON.parse(localStorage.getItem('start value') || '0');

function App() {

    const [savedValues, dispatchSavedValues] = useReducer(savedValuesReducer,{savedStartValue, savedMaxValue})

    const [maxInputValue, dispatchMaxValue] = useReducer(maxInputValueReducer, savedValues.savedMaxValue)

    const [startValue, dispatchStartValue] = useReducer(startInputValueReducer, savedValues.savedStartValue)

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
        dispatchSavedValues(setValuesCreator(startValue, maxInputValue))
        dispatchCounter(setStartValueCreator(startValue))
    }
    const getResetCounter = () => {
        dispatchCounter(resertValueCreator(startValue))
    }

    return (
        <div className="App">

            <Settings
                maxInputValue={maxInputValue}
                startValue={startValue}
                dispatchMaxValue={dispatchMaxValue}
                dispatchStartValue={dispatchStartValue}
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

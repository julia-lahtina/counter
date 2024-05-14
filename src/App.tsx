import React from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';
import {
    getIncreaseCounterCreator,
    resertValueCreator,
    setStartValueCreator
} from './redux/counterReducer';
import { setValuesCreator } from './redux/savedValuesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './redux/store';


export type SavedValuesType = { savedStartValue: number, savedMaxValue: number }



function App() {

    const savedValues = useSelector<AppRootStateType, SavedValuesType>(state => state.savedValues)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.maxInputValue)
    const minInputValue = useSelector<AppRootStateType, number>(state => state.minInputValue)
    const counter = useSelector<AppRootStateType, number>(state => state.counter)
    const dispatch = useDispatch()



    const getIncreaseCounter = () => {
        dispatch(getIncreaseCounterCreator())
    }
    const setValues = () => {
        dispatch(setValuesCreator(minInputValue, maxInputValue))
        dispatch(setStartValueCreator(minInputValue))
    }
    const getResetCounter = () => {
        dispatch(resertValueCreator(minInputValue))
    }

    return (
        <div className="App">

            <Settings
                maxInputValue={maxInputValue}
                startValue={minInputValue}
                setValues={setValues}
                dispatch={dispatch}
            />

            <Counter
                getIncreaseCounter={getIncreaseCounter}
                getResetCounter={getResetCounter}
                counter={counter}
                maxInputValue={maxInputValue}
                startValue={minInputValue}
                savedValues={savedValues}
            />

        </div>
    );
}

export default App;

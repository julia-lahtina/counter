import React from 'react';
import s from './Counter.module.css'
import {CounterButtons} from './counterButtons/CounterButtons';
import {CounterDisplay} from './counterDisplay/CounterDisplay';
import {SavedValuesType} from '../../App';


type CounterPropsType = {
    getIncreaseCounter: () => void
    getResetCounter: () => void
    counter: number
    maxInputValue: number
    startValue: number
    savedValues: SavedValuesType
}

export const Counter = ({
                            getResetCounter,
                            getIncreaseCounter,
                            counter,
                            maxInputValue,
                            startValue,
                            savedValues
                        }: CounterPropsType) => {


    return (
        <div className={s.counterWrapper}>
            <CounterDisplay
                startValue={startValue}
                maxInputValue={maxInputValue}
                counter={counter}
                savedValues={savedValues}
            />
            <CounterButtons
                counter={counter}
                startValue={startValue}
                maxInputValue={maxInputValue}
                getResetCounter={getResetCounter}
                getIncreaseCounter={getIncreaseCounter}
                savedValues={savedValues}
            />
        </div>
    );
};

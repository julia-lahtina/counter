import React from 'react';
import s from './Counter.module.css'
import {CounterButtons} from './counterButtons/CounterButtons';
import {CounterDisplay} from './counterDisplay/CounterDisplay';


type CounterPropsType = {
    getIncreaseCounter: () => void
    getResetCounter: () => void
    counter: number
    maxInputValue: number
    startValue: number
}

export const Counter = ({
                            getResetCounter,
                            getIncreaseCounter,
                            counter,
                            maxInputValue,
                            startValue,
                        }: CounterPropsType) => {


    return (
        <div className={s.counterWrapper}>
            <CounterDisplay
                startValue={startValue}
                maxInputValue={maxInputValue}
                counter={counter}
            />
            <CounterButtons
                counter={counter}
                startValue={startValue}
                maxInputValue={maxInputValue}
                getResetCounter={getResetCounter}
                getIncreaseCounter={getIncreaseCounter}
            />
        </div>
    );
};

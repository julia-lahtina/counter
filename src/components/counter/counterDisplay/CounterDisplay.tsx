// @flow
import * as React from 'react';
import s1 from './CounterDisplay.module.css'
import s2 from '../Counter.module.css'


type CounterDisplayPropsType = {
    counter: number
    maxInputValue: number
    startValue: number
};
export const CounterDisplay = ({counter, startValue, maxInputValue}: CounterDisplayPropsType) => {

    const incorrectValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const counterMaxValue = counter === maxInputValue;

    return (
        <div className={s1.displayWrapper}>
                <span className={s2.span}>
                    <div className={incorrectValue ? s1.incorrectValue : counterMaxValue ? s1.incorrectValue : ''}>
                        {incorrectValue ? 'Incorrect value!' : counter}
                    </div>
                </span>
        </div>
    );
};
// @flow
import * as React from 'react';
import s1 from './CounterDisplay.module.css'
import s2 from '../Counter.module.css'
import { SavedValuesType } from '../../../App';


type CounterDisplayPropsType = {
    counter: number
    maxInputValue: number
    startValue: number
    savedValues: SavedValuesType
};

export const CounterDisplay = ({
    counter,
    startValue,
    maxInputValue,
    savedValues
}: CounterDisplayPropsType) => {



    const incorrectValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const isChanged = savedValues.savedMaxValue !== maxInputValue || savedValues.savedStartValue !== startValue;
    const maxCounterValue = counter === maxInputValue;


    return (
        <div className={s1.displayWrapper}>
            <span>
                {
                    incorrectValue
                        ? <div className={s1.incorrectValue}>Incorrect value!</div>
                        : isChanged
                            ? <div className={s2.display}>enter values and press 'set'</div>
                            :
                            <div className={maxCounterValue ? s1.incorrectValue : s2.display}>{counter}</div>
                }
            </span>
        </div>
    );
};
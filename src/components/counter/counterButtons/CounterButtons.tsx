// @flow
import * as React from 'react';
import {Button} from '../../button/Button';
import s from '../../button/Button.module.css'
import {SavedValuesType} from '../../../App';


type CounterButtonsPropsType = {
    getIncreaseCounter: () => void
    getResetCounter: () => void
    counter: number
    maxInputValue: number
    startValue: number
    savedMaxValue: number
    savedStartValue: number
    savedValues: SavedValuesType
};
export const CounterButtons = ({
                                   getResetCounter,
                                   getIncreaseCounter,
                                   counter,
                                   maxInputValue,
                                   startValue,
                                   savedStartValue,
                                   savedMaxValue,
                                   savedValues
                               }: CounterButtonsPropsType) => {

    const disabledButtonReset = startValue < 0 || savedValues.savedMaxValue !== maxInputValue || savedValues.savedStartValue !== startValue;
    const disabledButtonInc = counter === maxInputValue || startValue < 0 || savedValues.savedMaxValue !== maxInputValue || savedValues.savedStartValue !== startValue;

    return (
        <div className={s.buttonWrapper}>
            <Button
                callBack={getIncreaseCounter}
                isDisabled={disabledButtonInc}
                className={disabledButtonInc ? s.disabledButton : s.activeButton}
                title={'inc'}
            />
            <Button
                callBack={getResetCounter}
                isDisabled={disabledButtonReset}
                className={disabledButtonReset ? s.disabledButton : s.activeButton}
                title={'reset'}
            />
        </div>
    );
};
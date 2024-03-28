// @flow
import * as React from 'react';
import {Button} from '../../button/Button';
import s from '../../button/Button.module.css'


type CounterButtonsPropsType = {
    getIncreaseCounter: () => void
    getResetCounter: () => void
    counter: number
    maxInputValue: number
    startValue: number
};
export const CounterButtons = ({getResetCounter, getIncreaseCounter, counter, maxInputValue, startValue}: CounterButtonsPropsType) => {

    const disabledButtonReset = counter === startValue || startValue < 0;
    const disabledButtonInc = counter === maxInputValue || startValue < 0;

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
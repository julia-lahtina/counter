import React from 'react';
import {Button} from './Button';
import {CounterType} from '../App';

export const Counter = ({
                            getResetCounter,
                            getIncreaseCounter,
                            counter,
                            maxValue,
                            minValue,
                            maxInputValue,
                            startValue,
                            setStartValue,
                            setMaxValue,
                            isFocused,
                            setIsFocused
                        }: CounterType) => {

    const disabledButtonReset = counter === startValue || isFocused;
    const disabledButtonInc = counter === maxInputValue || isFocused;
    const incorrectValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;

    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <span className={counter === maxInputValue ? 'counter-style' : '#0bd1fc'}>
                    <div className={incorrectValue ? 'incorrectValue' : isFocused ? 'focused' : ''}>
                        {incorrectValue ? 'Incorrect value!' : isFocused ? 'enter values and press "set"' : counter}

                    </div>
                </span>
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    callBack={getIncreaseCounter}
                    isDisabled={disabledButtonInc}
                    className={disabledButtonInc ? 'disabledButton' : 'activeButton'}
                    title={'inc'}
                />
                <Button
                    callBack={getResetCounter}
                    isDisabled={disabledButtonReset}
                    className={disabledButtonReset ? 'disabledButton' : 'activeButton'}
                    title={'reset'}
                />
            </div>
        </div>
    );
};

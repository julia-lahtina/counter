import React from 'react';
import {Button} from './Button';


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

    const disabledButtonReset = counter === startValue;
    const disabledButtonInc = counter === maxInputValue;
    const incorrectValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <span>
                    <div className={incorrectValue ? 'incorrectValue' : ''}>
                        {incorrectValue ? 'Incorrect value!' : counter}
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

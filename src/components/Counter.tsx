import React from 'react';
import {Button} from './Button';
import {CounterType} from '../App';

export const Counter = ({getResetCounter, getIncreaseCounter, counter, maxValue, minValue}: CounterType) => {

    const disabledButtonReset = counter === minValue;
    const disabledButtonInc = counter === maxValue;

    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <span className={counter === maxValue ? 'counter-style' : 'white'}>{counter}</span>
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    callBack={() => getIncreaseCounter(counter)}
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

import React from 'react';
import {Button} from './Button';
import {CounterType} from '../App';

export const Counter = ({getResetCounter, getIncreaseCounter, counter}: CounterType) => {

    const disabledButtonReset = counter === 0;
    const disabledButtonInc = counter === 5;

    return (
        <div className={'wrapper'}>
            <div className={counter===5 ? 'counter-style' : 'black'}>{counter}</div>
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

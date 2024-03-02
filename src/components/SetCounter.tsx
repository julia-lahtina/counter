import React from 'react';
import {CounterType} from '../App';
import {Button} from './Button';

export const SetCounter = ({getResetCounter, getIncreaseCounter, counter, maxValue, minValue}: CounterType) => {

    const disabledButtonReset = counter === minValue;
    const disabledButtonInc = counter === maxValue;

    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>max value: </span>
                    <input type="number"/>
                </div>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>start value: </span>
                    <input type="number"/>
                </div>
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    callBack={() => getIncreaseCounter(counter)}
                    isDisabled={disabledButtonInc}
                    className={disabledButtonInc ? 'disabledButton' : 'activeButton'}
                    title={'set'}
                />
            </div>
        </div>
    );
};


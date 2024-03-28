import React from 'react';
import {Button} from './Button';
import {Input} from './Input';


type SettingsPropsType = {
    counter: number
    maxInputValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (minValue: number) => void
    setValues: () => void
}
export const Settings = ({
                             counter,
                             startValue,
                             maxInputValue,
                             setMaxValue,
                             setStartValue,
                             setValues,
                         }: SettingsPropsType) => {

    const disabledButtonSet = counter===startValue|| startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const negativNumberStartValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;
    const negativNumberMaxValue = maxInputValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={'counter'}>
            <div className={'counter-wrapper'}>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>max value: </span>
                    <Input
                        newInputValue={maxInputValue}
                        setNewInputValue={setMaxValue}
                        className={negativNumberMaxValue ? 'negativ-number-input' : 'input'}
                    />
                </div>
                <div className={'value-wrapper'}>
                    <span style={{fontSize: '20px'}}>start value: </span>
                    <Input
                        newInputValue={startValue}
                        setNewInputValue={setStartValue}
                        className={negativNumberStartValue ? 'negativ-number-input' : 'input'}
                    />
                </div>
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    callBack={setValues}
                    isDisabled={disabledButtonSet}
                    className={disabledButtonSet ? 'disabledButton' : 'activeButton'}
                    title={'set'}
                />
            </div>
        </div>
    );
};


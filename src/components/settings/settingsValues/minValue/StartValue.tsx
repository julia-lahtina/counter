// @flow
import * as React from 'react';
import s1 from '../SettingsValues.module.css';
import s2 from '../../../input/Input.module.css';
import {Input} from '../../../input/Input';
import {ActionCreatorsType} from '../../../../redux/InputValueReducer';



type StartValuePropsType = {
    maxInputValue: number
    startValue: number
    dispatchStartValue: (minValue: ActionCreatorsType) => void
};

export const StartValue = ({maxInputValue, startValue, dispatchStartValue}: StartValuePropsType) => {

    const errorStartValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={s1.startValueWrapper}>
            <span>start value: </span>
            <Input
                newInputValue={startValue}
                setNewInputValue={dispatchStartValue}
                className={errorStartValue ? s2.errorInput : s2.input}
            />
        </div>
    );
};
// @flow
import * as React from 'react';
import s1 from '../SettingsValues.module.css';
import s2 from '../../../input/Input.module.css';
import {Input} from '../../../input/Input';
import {Dispatch} from 'redux';


type StartValuePropsType = {
    maxInputValue: number
    startValue: number
    dispatch: Dispatch
};

export const StartValue = ({maxInputValue, startValue, dispatch}: StartValuePropsType) => {

    const errorStartValue = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={s1.startValueWrapper}>
            <span>start value: </span>
            <Input
                newInputValue={startValue}
                setNewInputValue={dispatch}
                className={errorStartValue ? s2.errorInput : s2.input}
                inputType={'min'}
            />
        </div>
    );
};
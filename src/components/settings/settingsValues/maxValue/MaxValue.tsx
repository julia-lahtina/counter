// @flow
import * as React from 'react';
import s1 from '../SettingsValues.module.css';
import s2 from '../../../input/Input.module.css';
import {Input} from '../../../input/Input';
import {Dispatch} from 'redux';


type MaxValuePropsType = {
    maxInputValue: number
    startValue: number
    dispatch: Dispatch
};

export const MaxValue = ({maxInputValue, startValue, dispatch}: MaxValuePropsType) => {

    const errorNumberMaxValue = maxInputValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={s1.maxValueWrapper}>
            <span>max value: </span>
            <Input
                newInputValue={maxInputValue}
                setNewInputValue={dispatch}
                className={errorNumberMaxValue ? s2.errorInput : s2.input}
                inputType={'max'}
            />
        </div>
    );
};
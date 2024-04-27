// @flow
import * as React from 'react';
import s1 from '../SettingsValues.module.css';
import s2 from '../../../input/Input.module.css';
import {Input} from '../../../input/Input';
import {ActionCreatorsType} from '../../../../redux/InputValueReducer';


type MaxValuePropsType = {
    maxInputValue: number
    startValue: number
    dispatchMaxValue: (maxValue: ActionCreatorsType) => void
};

export const MaxValue = ({maxInputValue, startValue, dispatchMaxValue}: MaxValuePropsType) => {

    const errorNumberMaxValue = maxInputValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={s1.maxValueWrapper}>
            <span>max value: </span>
            <Input
                newInputValue={maxInputValue}
                setNewInputValue={dispatchMaxValue}
                className={errorNumberMaxValue ? s2.errorInput : s2.input}
            />
        </div>
    );
};
// @flow
import * as React from 'react';
import s1 from '../SettingsValues.module.css';
import s2 from '../../../input/Input.module.css';
import {Input} from '../../../input/Input';

type MaxValuePropsType = {
    maxInputValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
};

export const MaxValue = ({maxInputValue, startValue, setMaxValue}: MaxValuePropsType) => {

    const errorNumberMaxValue = maxInputValue < 0 || startValue === maxInputValue || startValue > maxInputValue;


    return (
        <div className={s1.maxValueWrapper}>
            <span>max value: </span>
            <Input
                newInputValue={maxInputValue}
                setNewInputValue={setMaxValue}
                className={errorNumberMaxValue ? s2.errorInput : s2.input}
            />
        </div>
    );
};
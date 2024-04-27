import React, {ChangeEvent, InputHTMLAttributes} from 'react';
import {maxValueCreator, maxValueCreatorType} from '../../redux/maxInputValueReducer';
import {startValueCreatorType} from '../../redux/startInputValueReducer';

type InputType = {
    newInputValue: number
    dispatchMaxValue: (maxValue: maxValueCreatorType) => void
} & InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        props.dispatchMaxValue(maxValueCreator(JSON.parse(currentValue)))
    }


    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler}
               type="number"/>
    );
};

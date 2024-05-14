import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { maxValueCreator } from '../../redux/maxInputValueReducer';
import { minValueCreator } from '../../redux/minInputValueReducer';
import { Dispatch } from 'redux';


type InputType = {
    newInputValue: number
    setNewInputValue: Dispatch
    inputType: 'max' | 'min'
} & InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        if (props.inputType === 'max') {
            props.setNewInputValue(maxValueCreator(JSON.parse(currentValue)))
        } else if (props.inputType === 'min') {
            props.setNewInputValue(minValueCreator(JSON.parse(currentValue)))
        }
    }


    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler}
            type="number" />
    );
};

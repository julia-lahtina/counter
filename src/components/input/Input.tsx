import React, {ChangeEvent, InputHTMLAttributes} from 'react';
import {ActionCreatorsType, valueCreator} from '../../redux/InputValueReducer';


type InputType = {
    newInputValue: number
    setNewInputValue: ((maxValue: ActionCreatorsType) => void) | ((minValue: ActionCreatorsType) => void)
} & InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        props.setNewInputValue(valueCreator(JSON.parse(currentValue)))
    }


    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler}
               type="number"/>
    );
};

import React, {ChangeEvent, InputHTMLAttributes} from 'react';

type InputTape = {
    newInputValue: number
    setNewInputValue: (newInputValue: number) => void
} & InputHTMLAttributes<HTMLInputElement>
export const Input = (props: InputTape) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        props.setNewInputValue(JSON.parse(currentValue))
    }

    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler} type="number"/>
    );
};

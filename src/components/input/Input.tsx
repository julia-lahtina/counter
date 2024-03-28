import React, {ChangeEvent, InputHTMLAttributes} from 'react';

type InputType = {
    newInputValue: number
    setNewInputValue: (newInputValue: number) => void
} & InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        props.setNewInputValue(JSON.parse(currentValue))
    }


    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler}
               type="number"/>
    );
};

import React, {ChangeEvent, InputHTMLAttributes} from 'react';

type InputTape = {
    newInputValue: number
    setNewInputValue: (newInputValue: number) => void
    isFocused: boolean
    setIsFocused: (isFocused: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>


export const Input = (props: InputTape) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value;
        props.setNewInputValue(JSON.parse(currentValue))
    }

    const onFocusHandler = () => {
        props.setIsFocused(true)
    }

    const onBlurHandler = () => {
        props.setIsFocused(false)
    }


    return (
        <input className={props.className} value={props.newInputValue} onChange={onChangeInputHandler}
               onFocus={onFocusHandler} onBlur={onBlurHandler} type="number"/>
    );
};

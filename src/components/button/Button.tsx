import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
    isDisabled: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({title, callBack, isDisabled, className}: ButtonPropsType) => {

    const handleClick = () => {
        callBack()
    }

    return (
        <button onClick={handleClick} disabled={isDisabled} className={className}>{title}</button>
    );
};

// @flow
import * as React from 'react';
import s from './SettingsValues.module.css';
import {MaxValue} from './maxValue/MaxValue';
import {StartValue} from './minValue/StartValue';

type SettingsValuePropsType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (minValue: number) => void
    maxInputValue: number
    startValue: number
}
export const SettingsValues = ({startValue, setStartValue, setMaxValue, maxInputValue}: SettingsValuePropsType) => {


    return (
        <div className={s.valuesWrapper}>
            <MaxValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
            />
            <StartValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                setStartValue={setStartValue}
            />
        </div>
    )
        ;
};
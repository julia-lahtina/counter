// @flow
import * as React from 'react';
import s from './SettingsValues.module.css';
import {MaxValue} from './maxValue/MaxValue';
import {StartValue} from './minValue/StartValue';
import {Dispatch} from 'redux';


type SettingsValuePropsType = {
    maxInputValue: number
    startValue: number
    dispatch: Dispatch
}
export const SettingsValues = ({startValue, maxInputValue, dispatch}: SettingsValuePropsType) => {


    return (
        <div className={s.valuesWrapper}>
            <MaxValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                dispatch={dispatch}
            />
            <StartValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                dispatch={dispatch}
            />
        </div>
    )
        ;
};
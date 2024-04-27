// @flow
import * as React from 'react';
import s from './SettingsValues.module.css';
import {MaxValue} from './maxValue/MaxValue';
import {StartValue} from './minValue/StartValue';
import {ActionCreatorsType} from '../../../redux/InputValueReducer';


type SettingsValuePropsType = {
    dispatchMaxValue: (maxValue: ActionCreatorsType) => void
    dispatchStartValue: (minValue: ActionCreatorsType) => void
    maxInputValue: number
    startValue: number
}
export const SettingsValues = ({startValue, dispatchStartValue, dispatchMaxValue, maxInputValue}: SettingsValuePropsType) => {


    return (
        <div className={s.valuesWrapper}>
            <MaxValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                dispatchMaxValue={dispatchMaxValue}
            />
            <StartValue
                maxInputValue={maxInputValue}
                startValue={startValue}
                dispatchStartValue={dispatchStartValue}
            />
        </div>
    )
        ;
};
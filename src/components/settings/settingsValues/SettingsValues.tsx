// @flow
import * as React from 'react';
import s from './SettingsValues.module.css';
import {MaxValue} from './maxValue/MaxValue';
import {StartValue} from './minValue/StartValue';
import {maxValueCreatorType} from '../../../redux/maxInputValueReducer';
import {startValueCreatorType} from '../../../redux/startInputValueReducer';

type SettingsValuePropsType = {
    dispatchMaxValue: (maxValue: maxValueCreatorType) => void
    dispatchStartValue: (minValue: startValueCreatorType) => void
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
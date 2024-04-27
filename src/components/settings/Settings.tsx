import React from 'react';
import {Button} from '../button/Button';
import s1 from './Settings.module.css'
import s2 from '../button/Button.module.css'
import {SettingsValues} from './settingsValues/SettingsValues';
import {maxValueCreatorType} from '../../redux/maxInputValueReducer';
import {startValueCreatorType} from '../../redux/startInputValueReducer';


type SettingsPropsType = {
    maxInputValue: number
    startValue: number
    dispatchMaxValue: (maxValue: maxValueCreatorType) => void
    dispatchStartValue: (minValue: startValueCreatorType) => void
    setValues: () => void
}
export const Settings = ({
                             startValue,
                             maxInputValue,
                             dispatchMaxValue,
                             dispatchStartValue,
                             setValues
                         }: SettingsPropsType) => {

    const disabledButtonSet = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;

    return (
        <div className={s1.settingsMainWrapper}>

                <SettingsValues
                    dispatchMaxValue={dispatchMaxValue}
                    dispatchStartValue={dispatchStartValue}
                    startValue={startValue}
                    maxInputValue={maxInputValue}
                />

            <div className={s2.buttonWrapper}>
                <Button
                    callBack={setValues}
                    isDisabled={disabledButtonSet}
                    className={disabledButtonSet ? s2.disabledButton : s2.activeButton}
                    title={'set'}
                />
            </div>
        </div>
    );
};


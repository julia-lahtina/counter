import React from 'react';
import {Button} from '../button/Button';
import s1 from './Settings.module.css'
import s2 from '../button/Button.module.css'
import {SettingsValues} from './settingsValues/SettingsValues';


type SettingsPropsType = {
    counter: number
    maxInputValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (minValue: number) => void
    setValues: () => void
}
export const Settings = ({
                             counter,
                             startValue,
                             maxInputValue,
                             setMaxValue,
                             setStartValue,
                             setValues,
                         }: SettingsPropsType) => {

    const disabledButtonSet = counter === startValue || startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;

    return (
        <div className={s1.settingsMainWrapper}>

                <SettingsValues
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
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


import React from 'react';
import {Button} from '../button/Button';
import s1 from './Settings.module.css'
import s2 from '../button/Button.module.css'
import {SettingsValues} from './settingsValues/SettingsValues';
import {Dispatch} from 'redux';


type SettingsPropsType = {
    maxInputValue: number
    startValue: number
    setValues: () => void
    dispatch: Dispatch
}
export const Settings = ({
                             startValue,
                             maxInputValue,
                             setValues,
                             dispatch
                         }: SettingsPropsType) => {

    const disabledButtonSet = startValue < 0 || startValue === maxInputValue || startValue > maxInputValue;

    return (
        <div className={s1.settingsMainWrapper}>

            <SettingsValues
                startValue={startValue}
                maxInputValue={maxInputValue}
                dispatch={dispatch}
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


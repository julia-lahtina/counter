import { SavedValuesType } from '../App';
import { loadState } from '../utils/localstorage-utils';

const initialValue = { savedStartValue: loadState()?.minInputValue, savedMaxValue: loadState()?.maxInputValue };
export const savedValuesReducer = (state: SavedValuesType = initialValue, action: setValuesCreatorType): SavedValuesType => {
    switch (action.type) {
        case 'MAX_START_VALUE':
            return { savedStartValue: action.savedStartValue, savedMaxValue: action.savedMaxValue }
        default:
            return state
    }
}


type setValuesCreatorType = ReturnType<typeof setValuesCreator>
export const setValuesCreator = (startValue: number, maxInputValue: number) => {
    return {
        type: 'MAX_START_VALUE',
        savedMaxValue: maxInputValue,
        savedStartValue: startValue
    } as const
}
import {SavedValuesType} from '../App';

const savedMaxValue = +JSON.parse(localStorage.getItem('max value') || '5');
const savedStartValue = +JSON.parse(localStorage.getItem('start value') || '0');

const initialValue = { savedStartValue: savedStartValue, savedMaxValue: savedMaxValue };
export const savedValuesReducer = (state: SavedValuesType = initialValue, action: setValuesCreatorType): SavedValuesType => {
    switch (action.type) {
        case 'MAX_START_VALUE':
            return {savedStartValue: action.savedStartValue, savedMaxValue: action.savedMaxValue}
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
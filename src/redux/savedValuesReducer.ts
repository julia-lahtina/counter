import {SavedValuesType} from '../App';

export const savedValuesReducer = (state: SavedValuesType, action: setValuesCreatorType): SavedValuesType => {
    switch (action.type) {
        case 'MAX_START_VALUE':
            return {savedMaxValue: action.savedMaxValue, savedStartValue: action.savedStartValue}
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
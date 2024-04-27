
const savedStartValue = +JSON.parse(localStorage.getItem('start value') || '0');
const initialValue = savedStartValue;
export const minInputValueReducer = (state: number = initialValue, action: ActionCreatorsType): number => {
    switch (action.type) {
        case 'MIN_INPUT_VALUE':
            return action.minValue
        default:
            return state
    }
}

export type ActionCreatorsType = ValueCreatorForMinValueType

type ValueCreatorForMinValueType = ReturnType<typeof minValueCreator>
export const minValueCreator = (minValue: number) => {
    return {
        type: 'MIN_INPUT_VALUE',
        minValue: minValue
    } as const
}



const initialValue = 5;

export const maxInputValueReducer = (state: number = initialValue, action: ActionCreatorsType): number => {
    switch (action.type) {
        case 'MAX_INPUT_VALUE':
            return action.maxValue
        default:
            return state
    }
}

export type ActionCreatorsType = ValueCreatorForMaxValueType

type ValueCreatorForMaxValueType = ReturnType<typeof maxValueCreator>
export const maxValueCreator = (maxValue: number) => {
    return {
        type: 'MAX_INPUT_VALUE',
        maxValue: maxValue
    } as const
}


export const maxInputValueReducer = (state: number, action: maxValueCreatorType): number => {
    switch (action.type) {
        case 'MAX_INPUT_VALUE':
            return state = action.maxValue
        default:
            return state
    }
}


export type maxValueCreatorType = ReturnType<typeof maxValueCreator>
export const maxValueCreator = (maxValue: number) => {
    return {
        type: 'MAX_INPUT_VALUE',
        maxValue: maxValue
    } as const
}
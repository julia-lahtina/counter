export const startInputValueReducer = (state: number, action: startValueCreatorType): number => {
    switch (action.type) {
        case 'START_INPUT_VALUE':
            return state = action.startValue
        default:
            return state
    }
}


export type startValueCreatorType = ReturnType<typeof startValueCreator>
export const startValueCreator = (startValue: number) => {
    return {
        type: 'START_INPUT_VALUE',
        startValue: startValue
    } as const
}
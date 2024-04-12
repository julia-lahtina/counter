export const counterReducer = (state: number, action: ActionsTypes): number => {
    switch (action.type) {
        case 'INCREASE_COUNTER': {
            return state + 1;
        }

        case 'START_VALUE': {
            return state = action.startValue;
        }

        default:
            return state
    }
}


type ActionsTypes = GetIncreaseCounterCreatorType | StartValueCreatorType

type GetIncreaseCounterCreatorType = ReturnType<typeof getIncreaseCounterCreator>
export const getIncreaseCounterCreator = () => {
    return {
        type: 'INCREASE_COUNTER'
    } as const
}


type StartValueCreatorType = ReturnType<typeof startValueCreator>
export const startValueCreator = (startValue: number) => {
    return {
        type: 'START_VALUE',
        startValue: startValue
    } as const
}
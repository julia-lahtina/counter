
const initialState = 0;

export const counterReducer = (state: number = initialState, action: ActionsTypes): number => {
    switch (action.type) {
        case 'INCREASE_COUNTER': {
            return state + 1;
        }

        case 'SET_START_VALUE': {
            return action.startValue;
        }

        case 'RESERT_VALUE': {
            return action.startValue
        }

        default:
            return state
    }
}


type ActionsTypes = GetIncreaseCounterCreatorType | StartValueCreatorType | resertValueCreatorType

type GetIncreaseCounterCreatorType = ReturnType<typeof getIncreaseCounterCreator>
export const getIncreaseCounterCreator = () => {
    return {
        type: 'INCREASE_COUNTER'
    } as const
}


type StartValueCreatorType = ReturnType<typeof setStartValueCreator>
export const setStartValueCreator = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue: startValue
    } as const
}


type resertValueCreatorType = ReturnType<typeof resertValueCreator>
export const resertValueCreator = (startValue: number) => {
    return {
        type: 'RESERT_VALUE',
        startValue: startValue
    } as const
}
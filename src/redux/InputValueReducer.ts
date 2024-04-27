export const inputValueReducer = (state: number, action: ActionCreatorsType): number => {
    switch (action.type) {
        case 'INPUT_VALUE':
            return action.value
        default:
            return state
    }
}

export type ActionCreatorsType = ValueCreatorForMaxValueType

type ValueCreatorForMaxValueType = ReturnType<typeof valueCreator>
export const valueCreator = (value: number) => {
    return {
        type: 'INPUT_VALUE',
        value: value
    } as const
}


import { AppRootStateType } from "../redux/store";

export const loadState = () => {
    try {
        const serializedStateCounter = localStorage.getItem('counter' || 0);
        const serializedStateMaxInputValue = localStorage.getItem('maxInputValue' || 5);
        const serializedStateMinInputValue = localStorage.getItem('minInputValue' || 0);
        if (serializedStateCounter === null || serializedStateMaxInputValue === null || serializedStateMinInputValue === null) {
            return undefined;
        }
        return {
            counter: JSON.parse(serializedStateCounter),
            maxInputValue: JSON.parse(serializedStateMaxInputValue),
            minInputValue: JSON.parse(serializedStateMinInputValue),
        }
    } catch (err) {
        console.log('error:', err)
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedStateCounter = JSON.stringify(state.counter);
        const serializedStateMaxInputValue = JSON.stringify(state.maxInputValue);
        const serializedStateMinInputValue = JSON.stringify(state.minInputValue);
        localStorage.setItem('counter', serializedStateCounter);
        localStorage.setItem('maxInputValue', serializedStateMaxInputValue);
        localStorage.setItem('minInputValue', serializedStateMinInputValue);
    } catch (err) {
        console.log('error:', err)
    }
}
import {counterReducer, getIncreaseCounterCreator, resertValueCreator, setStartValueCreator} from './counterReducer';


test('should increase counter by 1', () => {
    const initialState = 0;
    const action = getIncreaseCounterCreator();
    const newState = counterReducer(initialState, action);

    expect(newState).toBe(initialState + 1);
});

test('should set counter to start value', () => {
    const initialState = 0;
    const startValue = 10;
    const action = setStartValueCreator(startValue);
    const newState = counterReducer(initialState, action);

    expect(newState).toBe(startValue);
});

test('should reset counter to start value', () => {
    const initialState = 5;
    const startValue = 0;
    const action = resertValueCreator(startValue);
    const newState = counterReducer(initialState, action);

    expect(newState).toBe(startValue);
});

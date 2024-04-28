import {minInputValueReducer, minValueCreator} from './minInputValueReducer';

test('min value should be correct', () => {
    const initialState = 0;
    const action = minValueCreator(2);
    const newMinValue = minInputValueReducer(initialState, action)

    expect(newMinValue).toBe(2)
})
import {maxInputValueReducer, maxValueCreator} from './maxInputValueReducer';

test('max value should be correct', () => {
    const initialState = 5;
    const action = maxValueCreator(8)
    const newMaxValue = maxInputValueReducer(initialState, action)

    expect(newMaxValue).toBe(8)
})
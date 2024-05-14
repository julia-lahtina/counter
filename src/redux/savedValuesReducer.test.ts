import { savedValuesReducer, setValuesCreator } from './savedValuesReducer';
import { SavedValuesType } from '../App';

test('should set saved values correctly', () => {
    const initialState: SavedValuesType = { savedStartValue: 0, savedMaxValue: 0 };
    const action = setValuesCreator(2, 5);
    const newState = savedValuesReducer(initialState, action);

    expect(newState).toEqual({ savedStartValue: 2, savedMaxValue: 5 })

})
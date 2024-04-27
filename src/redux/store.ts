import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';
import {maxInputValueReducer} from './maxInputValueReducer';
import {savedValuesReducer} from './savedValuesReducer';
import {minInputValueReducer} from './minInputValueReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    maxInputValue: maxInputValueReducer,
    minInputValue: minInputValueReducer,
    savedValues: savedValuesReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

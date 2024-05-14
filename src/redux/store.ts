import { combineReducers, legacy_createStore } from 'redux';
import { counterReducer } from './counterReducer';
import { maxInputValueReducer } from './maxInputValueReducer';
import { savedValuesReducer } from './savedValuesReducer';
import { minInputValueReducer } from './minInputValueReducer';
import { loadState, saveState } from '../utils/localstorage-utils';

const rootReducer = combineReducers({
    counter: counterReducer,
    maxInputValue: maxInputValueReducer,
    minInputValue: minInputValueReducer,
    savedValues: savedValuesReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        maxInputValue: store.getState().maxInputValue,
        minInputValue: store.getState().minInputValue,
        savedValues: store.getState().savedValues
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

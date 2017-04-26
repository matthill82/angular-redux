import {COUNTRIES} from '../constants/countries';

const defaultState = [];

export function CountriesReducer(state = defaultState, action) {
    switch (action.type) {
        case COUNTRIES.ADD_COUNTRY:
            return [...state, action.payload];
        case COUNTRIES.REMOVE_COUNTRY:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case COUNTRIES.REMOVE_ALL:
            return [];
        default:
            return state;
    }
}


// WEBPACK FOOTER //
// ./client/app/reducers/countries.reducer.js
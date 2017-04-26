import { combineReducers } from 'redux';
import { CountriesReducer }  from './countries.reducer';

export const RootReducer = combineReducers({
    countriesAdded: CountriesReducer
});

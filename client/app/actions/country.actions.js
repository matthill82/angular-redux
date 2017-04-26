import {COUNTRIES} from '../constants/countries';

function addCountry(country) {
    return {
        type: COUNTRIES.ADD_COUNTRY,
        payload: country
    }
}

function removeCountry(country, index) {
    return {
        type: COUNTRIES.REMOVE_COUNTRY,
        payload: country,
        index: index
    };
}

function removeAll() {
    return {
        type: COUNTRIES.REMOVE_ALL,
        payload : []
    }
}

export default {addCountry, removeCountry, removeAll};

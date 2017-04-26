/**
 * Created by matthew.hill on 13/04/2017.
 */

import {API} from '../constants/api';

let CountryApi = ($http, $q) => {

    // ---
    // PUBLIC METHODS.
    // --
    let create = (data) => {
        if (angular.isObject(data)) {
            let request = $http({
                method: "POST",
                url: `${API.URL}/country/selectedCountries`,
                data: data
            });
            return ( request.then(handleSuccess, handleError) );
        }
    };

    let getCountries = (query) => {
        if (query) {
            let request = $http({
                method: "GET",
                url: `${API.URL}/country?name_like=^${query}`
            });
            return ( request.then(handleSuccess, handleError) );
        }
    };

    // ---
    // PRIVATE METHODS.
    // ---
    function handleError(response) {
        if (
            !angular.isObject(response.data) ||
            !response.data.message
        ) {
            return ( $q.reject("An unknown error occurred.") );
        }
        return ( $q.reject(response.data.message) );
    }

    function handleSuccess(response) {
        return ( response.data );
    }

    // Return public API.
    return {create, getCountries};
};

CountryApi.$inject = ['$http', '$q'];
export {CountryApi};


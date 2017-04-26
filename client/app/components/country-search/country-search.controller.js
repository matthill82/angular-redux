import * as countryActions from '../../actions/country.actions';

class CountrySearchController {
    constructor(CountryApi, $scope, $ngRedux) {

        this.CountryApi = CountryApi;
        this.$scope = $scope;
        this.$ngRedux = $ngRedux;

        this.countryResults = [];
        this.messages = "";

        // nasty watcher for input
        this.$scope.$watch('$ctrl.countries', (oldValue) => {
            if (oldValue.length >= 2) {
                this.getCountryApi(oldValue);
            } else {
                this.countryResults = [];
            }
        });

    }

    getCountryApi(search) {
        this.CountryApi.getCountries(search)
            .then((response) => {
                if (response.length) {
                    this.countryResults = response;
                }
            });
    }

    chooseCountry(country) {
        this.$ngRedux.dispatch(countryActions.addCountry(country));
    }

    sendCountry() {
        // lets grab the state of the application to post off to the server
        let getState = this.$ngRedux.getState();

        if(angular.isObject(getState)) {
            this.CountryApi.create({isoCodes: getState}).then(() => {

                setTimeout(() => {
                    // lets show a success message
                    this.messages = "Success!!!";
                    // lets clear the api search also.
                    this.countries = "";
                    // lets clear the state as per requirements
                    this.$ngRedux.dispatch(countryActions.removeAll());
                }, 500);

            });
        } else {
            this.messages = "You've not sent anything!!, Please add countries to send"
        }
    }
}

CountrySearchController.$inject = ['CountryApi', '$scope', '$ngRedux'];
export default CountrySearchController;

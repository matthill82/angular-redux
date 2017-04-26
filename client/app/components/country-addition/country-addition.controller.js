/**
 * Created by matthew.hill on 14/04/2017.
 */

import countryActions from '../../actions/country.actions';

export default function renderController($scope, $ngRedux) {
    const disconnect = $ngRedux.connect((state) => {
        console.log('from disconnect', state);
        return {
            countriesAdded: state.countriesAdded,
        };
    })(this);

    this.removeCountry = (country, index) => {
        $ngRedux.dispatch(countryActions.removeCountry(country, index));
    };

    // trigger unsubscribe
    $scope.$on('$destroy', disconnect);
}

renderController.$inject = ['$scope', '$ngRedux'];

/**
 * Created by matthew.hill on 11/04/2017.
 */

import template from './country-addition.html';
import controller from './country-addition.controller';

let countryAdditionComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: '$ctrl'
};

export default countryAdditionComponent;
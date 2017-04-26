import template from './country-search.html';
import controller from './country-search.controller';
import './country-search.scss';

let countrySearchComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default countrySearchComponent;

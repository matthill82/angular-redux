import angular from 'angular';
import uiRouter from 'angular-ui-router';
import countrySearchComponent from './country-search.component';

const countrySearchModule = angular.module('countrySearch', [
  uiRouter
])

.component('countrySearch', countrySearchComponent);

export default countrySearchModule;

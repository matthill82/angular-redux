/**
 * Created by matthew.hill on 14/04/2017.
 */
import angular from 'angular';
import countryAdditionComponent from './country-addition.component';

const countryAdditionModule = angular.module('countryAddition', [])
    .component('countryAddition', countryAdditionComponent);

export default countryAdditionModule;
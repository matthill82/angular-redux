/**
 * Created by matthew.hill on 13/04/2017.
 */
import angular from 'angular';
import { CountryItem } from './country-item.factory';

const FactoryModule = angular.module('factories', [])
    .service("CountryItem", CountryItem);

export default FactoryModule;
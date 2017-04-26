/**
 * Created by matthew.hill on 13/04/2017.
 */
import angular from 'angular';
import { CountryApi } from './country.service';

const ServiceModule = angular.module('services', [])
    .service("CountryApi", CountryApi);

export default ServiceModule;

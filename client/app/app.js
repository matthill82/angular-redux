import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngRedux      from 'ng-redux';
import ngReduxDevTools from 'ng-redux-dev-tools';

import AppComponent from './app.component';

import NavigationComponent  from './components/navigation/navigation';
import CountrySearchComponent        from './components/country-search/country-search';
import CountryAdditionModule from './components/country-addition/country-addition'

import { RootReducer } from './reducers';

import ServiceModule from './services';
import FactoryModule from './factories';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('ubs', [
        uiRouter,
        ngRedux,
        ngReduxDevTools,

        NavigationComponent.name,
        CountrySearchComponent.name,
        CountryAdditionModule.name,

        ServiceModule.name,
        FactoryModule.name

    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider, devToolsServiceProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<app></app>'
            })

            // Dashboard page to contain our country list page
            .state('app.country', {
                url: '/country',
                template: '<country-search></country-search>'
            });

        $urlRouterProvider.otherwise('/country');


        $ngReduxProvider.createStoreWith(RootReducer, [], [devToolsServiceProvider.instrument()]);
    })
    .component('app', AppComponent);

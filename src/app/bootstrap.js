/*
 * Providers provided by Angular
 */
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
/*
 * App Component
 * our top level component that holds all of our components
 */
var app_1 = require('./app');
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
angular2_1.bootstrap(app_1.App, [
    // These are dependencies of our App
    angular2_1.FORM_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_1.ELEMENT_PROBE_PROVIDERS
]);

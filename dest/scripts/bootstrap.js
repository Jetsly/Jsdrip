define(["require", "exports", 'angular2/angular2', 'angular2/router', 'angular2/http', './app'], function (require, exports, angular2_1, router_1, http_1, app_1) {
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
});

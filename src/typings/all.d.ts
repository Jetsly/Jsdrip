// LIBS DEFINITION
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="redux.d.ts"/>


// API is supposed to be changing soon so dummy definitions
// https://github.com/acdlite/redux-react-router/issues/1
declare module "redux-react-router" {
    function reduxRouteComponent(store: any): any;
    function routerStateReducer(): any;
}
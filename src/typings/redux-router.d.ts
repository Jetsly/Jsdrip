/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="redux.d.ts" />

declare module "redux-router" {
	function reduxReactRouter(reducers: any): any;
    function routerStateReducer(...middleware: any[]): any;
    function ReduxRouter<T extends Function>(...functions: Function[]): T;
}
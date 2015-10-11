/// <reference path="../../typings/tsd.d.ts" />

declare namespace __ReactDom {
    function render(
        element: any,
        container: any):any;
}
declare module "react-dom" {
    export = __ReactDom;
}
import {Component,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Index} from './index/index';
import {About} from './about/about';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: Index, name: 'Index'},
    {path: '/about', component: About, name: 'About'},
    {path: '/**', redirectTo: ['Index']}
])
@View({
    template: require('raw!./app.html')
})
export class App {
    name = 'World';
    constructor() {
    }
}
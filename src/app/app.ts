import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Index} from './index/index';
import {About} from './about/about';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: require('raw!./app.html')
})
@RouteConfig([
    {path: '/', component: Index, name: 'Index'},
    {path: '/about', component: About, name: 'About'},
    {path: '/**', redirectTo: ['Index']}
])
export class App {
    name = 'World';
    constructor() {
    }
}
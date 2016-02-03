import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home/home';
import {About} from './about/about';
import {Navigation} from './navigation/navigation';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES,Navigation],
    template: require('./app.jade')()
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'},
    {path: '/**', redirectTo: ['Home']}
])
export class App {
    name = 'World';
    constructor() {
    }
}
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
    template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li router-active="active">
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active="active">
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
    </footer>
  `
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
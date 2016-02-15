import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    template: require('./navigation.jade')()
})
export class Navigation {
    constructor() {

    }
}
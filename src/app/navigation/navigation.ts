import {Component,View} from 'angular2/core';

@Component({
    selector: 'navigation'
})
@View({
    template: require('./navigation.jade')()
})
export class Navigation {
    constructor() {

    }
}
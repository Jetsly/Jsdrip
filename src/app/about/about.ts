import {Component,View} from 'angular2/core';

@Component({
    selector: 'about',
    template: require('./about.jade')()
})
export class About {
    constructor() {

    }
}
import {Component,View} from 'angular2/core';

@Component({
    selector: 'about'
})
@View({
    template: require('./about.html')
})
export class About {
    constructor() {

    }
}
import {Component,View} from 'angular2/core';

@Component({
    selector: 'home'
})
@View({
    template: require('./home.jade')()
})
export class Home {
    constructor() {

    }
    ngOnInit() {
        console.log('hello Home component');
    }
}
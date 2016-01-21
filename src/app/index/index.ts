import {Component,View} from 'angular2/core';

@Component({
    selector: 'index'
})
@View({
    template: require('./index.jade')()
})
export class Index {
    constructor() {

    }
    ngOnInit() {
        console.log('hello Home component');
    }
}
import {Component} from 'angular2/core';
import {View} from "angular2/core";

@Component({
    selector: 'index'
})
@View({
    template: require('./index.html')
})
export class Index {
    constructor() {

    }
    ngOnInit() {
        console.log('hello Home component');
    }
}
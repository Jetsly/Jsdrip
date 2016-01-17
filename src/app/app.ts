import {Component, View} from "angular2/core";
// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
export class App {
  name: string;
  constructor() {
    this.name = 'Alssssseeessce';
  }
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", 'angular2/angular2', 'angular2/http', 'angular2/router'], function (require, exports, angular2_1, http_1, router_1) {
    /*
     * Directive
     * XLarge is a simple directive to show how one is made
     */
    var XLarge = (function () {
        function XLarge(element) {
            // simple DOM manipulation to set font size to x-large
            // `nativeElement` is the direct reference to the DOM element
            element.nativeElement.style.fontSize = 'x-large';
        }
        XLarge = __decorate([
            angular2_1.Directive({
                selector: '[x-large]' // using [ ] means selecting attributes
            })
        ], XLarge);
        return XLarge;
    })();
    exports.XLarge = XLarge;
    /*
     * App Component
     * Top Level Component
     */
    var App = (function () {
        // TypeScript public modifiers
        function App(http) {
            this.http = http;
            this.data = []; // default data
            this.title = 'Angular 2';
        }
        App.prototype.ngOnInit = function () {
            // Our API
            // Before you start the app, run these commands in another process:
            //
            // - npm run express-install
            // - npm run express
            //
            // This will start a process that will listen for requests on port 3001
            var _this = this;
            var BASE_URL = 'http://localhost:3001';
            var TODO_API_URL = '/api/todos';
            var JSON_HEADERS = new http_1.Headers();
            JSON_HEADERS.append('Accept', 'application/json');
            JSON_HEADERS.append('Content-Type', 'application/json');
            this.http
                .get(BASE_URL + TODO_API_URL, {
                headers: JSON_HEADERS
            })
                .subscribe(
            // onNext callback
            function (data) { return _this.serverData(data); }, 
            // onError callback
            function (err) { return _this.errorMessage(err); }, 
            // onComplete callback
            function () { return console.log('complete'); }); //end http
        };
        App.prototype.serverData = function (data) {
            console.log('data', data);
            this.data = data;
        }; //serverData
        App.prototype.errorMessage = function (err) {
            console.info('\n' + " // You must run these commands in another process for the Http API to work  " + '\n' + " npm run express-install " + '\n' + " npm run express\n    ");
        }; //errorMessage
        App = __decorate([
            angular2_1.Component({
                // The selector is what angular internally uses
                // for `document.querySelectorAll(selector)` in our index.html
                // where, in this case, selector is the string 'app'
                selector: 'app',
                // We need to tell Angular's compiler which directives are in our template.
                // Doing so will allow Angular to attach our behavior to an element
                directives: [router_1.ROUTER_DIRECTIVES, XLarge],
                // Our list of styles in our component. We may add more to compose many styles together
                styles: ["\n    .title {\n      font-family: Arial, Helvetica, sans-serif;\n    }\n    main {\n      padding: 1em;\n    }\n  "],
                // Every Angular template is first compiled by the browser before Angular runs it's compiler
                template: "\n  <header>\n    <h1 class=\"title\">Hello {{ title }}</h1>\n  </header>\n  <main>\n    Your Content Here\n    <div>\n      <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" autofocus>\n      <!--\n        Rather than wiring up two-way data-binding ourselves\n        we can use Angular's [(ng-model)] syntax\n        <input type=\"text\" [(ng-model)]=\"title\">\n      -->\n    </div>\n    <pre>this.title = {{ title | json }}</pre>\n    <pre>this.data = {{ data | json }}</pre>\n  </main>\n  <footer x-large>\n    WebPack Angular 2 Starter by <a href=\"https://twitter.com/AngularClass\">@AngularClass</a>\n  </footer>\n  "
            })
        ], App);
        return App;
    })();
    exports.App = App;
});
/*
 * Please review the examples/ folder for more angular app examples
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * you can change the `entry` in webpack.config to quickly view the examples
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */ 

# Jsdrip

## File Structure
```
jsdrip/
 ├──src/                                   * our source files that will be compiled to javascript
 │   │
 │   ├──app/                               * WebApp: folder
 │   │   ├──app.ts                         * App.ts: a simple version of our App component components
 │   │   └──bootstrap.ts                   * entry file for app
 │   │
 │   ├──bindings/                          * where common files used throughout our app
 │   │   ├──location_bindings.ts           * injectables to change the Router location Strategy
 │   │   └──change_detection_bindings.ts   * injectables to change Angular's Change Detection Strategy
 │   │
 │   ├──public/                            * static assets are served here
 │   │   ├──lib/                           * static libraries
 │   │   │   └──es6-shim.js                * ignore this file. This is needed to polyfill the browser to for ES6 features to similarly
 │   │   │
 │   │   ├──favicon.ico                    * replace me with your own favicon.ico
 │   │   ├──service-worker.js              * ignore this. Web App service worker that's not complete yet
 │   │   ├──robots.txt                     * for search engines to crawl your website
 │   │   ├──human.txt                      * for humans to know who the developers are
 │   │   │
 │   │   └──index.html                     * Index.html: where we place our script tags
 │   │
 │   └──typings/                           * where we define our custom types
 │       ├──ng2.d.ts                       * where we patch angular2 types with our own types until it's fixed
 │       └──_custom.d.ts                   * we include all of our custom types here
 │
 ├──tsd_typings/                           * ignore this auto generated file from tsd
 │   └──tsd.d.ts                           * ignore this our main file for all of our type definitions
 │
 ├──test/                                  * this is our global unit tests and end-to-end tests
 │
 ├──spec.bundle.js                         * ignore this magic that sets up our angular 2 testing environment
 ├──karma.config.js                        * karam config for our unit tests
 ├──protractor.config.js                   * protractor config for our end-to-end tests
 ├──tsconfig.json                          * config that webpack uses for typescript
 ├──tsd.json                               * config that tsd uses for managing it's definitions
 ├──package.json                           * what npm uses to manage it's dependencies
 └──webpack.config.js                      * our webpack config
```
## 相关
* [angular2-webpack-starter](https://github.com/angular-class/angular2-webpack-starter)
* [angular2-gulp-starterpack](https://github.com/kaadash/angular2-gulp-starterpack)
* [tsd](http://definitelytyped.org/tsd/)
* [semantic-ui](http://semantic-ui.com/)
* [wallaby](http://wallabyjs.com/)
/// <reference path="../typings/all.d.ts" />
import * as React from "react"
//import App from './app'
let App = require( "./app.tsx").App;

React.render(
    <App/>,
    document.body
);
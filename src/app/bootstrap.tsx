/// <reference path="../typings/all.d.ts" />
import * as React from "react"
import * as ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
//import App from './app'
let { App } = require( "./app");

ReactDOM.render(
    <App/>,
    document.body
);
/// <reference path="../typings/all.d.ts" />
import * as React from "react"
export class App extends React.Component<any, any> {
	 render(){
		let a=[2];
		let b=[...a,2,3]
		return (
            <div>{b}</div>
        );
	 }
}
pre-requisites: 
 - node.js

 creating a default application project with react
- npx create-react-app name-of-project

 running application
- npm start


BASICS

 creating component
- create a file with ".js" extension
- add default code to file:
	import React from "react";
	
	export default function ComponentName(props){
	  return (
	    <div>
	      Hello Component
	      // if you had to use props
	      <p> {props.propname} </p>
	    </div>
 	  );
	}
- import component in main file:
	import ComponentName from "./component/location/Component-file";
- add the component such any other tag:
	<ComponentName propname = "this is a prop" ></ComponentName>


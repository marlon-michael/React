# BASICS

 ### creating component
- create a file with ".js" extension
- add these lines to file:
	```javascript
	import React from "react";

	export default function ComponentName(){
	  return (
	    <div>
	      <h1>Hello Component</h1>
	    </div>
 	  )
	}
	```

- import component in main file:
	```javascript 
	import ComponentName from "./component/location/Component-file";
	```

- add the component such any other tag:
	```javascript 
	<ComponentName></ComponentName>
	```

### passing data inside component
- name your data parameter inside the parentheses, we usually name as "props"
	```javascript
	export default function ComponentName(props){
		//code block
	}
	```
- and then use your props inside braces
	```javascript
	  return (
	    <div>
	      <p> {props.propname} {props.id} </p>
		  <p> {propname} {id} </p> // props can be used without the global parameter props
	    </div>
 	  );
	```

- add the component such any other tag:
	```javascript
	<ComponentName propname = "this is a prop" id = {1}></ComponentName>
	```

### passing data betwen parent and clild components
#### (parent component)
- import useState from react
	```javascript 
	import {useState} from "react"
	```
- set a const useState to store child data
	```javascript 
	const [childData, setChildData] = useState()
	```
- create a function and pass it as a prop in child component
	```javascript 
	const func = (data) => { setData(data) }
	``` 
	```html
	<Component func = {func}></Component>
	```
- rendering the childData
	```html 
	<h1>{childData}</h1>
	``` 

#### (parent component)
- use the function passed by prop and pass the data you want outside the component
	```javascript
	const [data,setData] = useState()
    setData("childData")
    props.func(data)
	``` 
	
### how to use useState (variables, arrays and objects)
```javascript 
const [text, setText] = useState("initial text")
const [array, setArray] = useState(["element 1", "element 2"])
const [thing, setThing] = useState({name: "person", age: 18})

setText("new text")
setArray(oldArray => [...oldArray, "new element"]) //add element tu array
setThing({...thing, name: "new name"})
```

### how to use useEffect
useEffect can be use to execute a given piece of code specified number of times
- one single time using an empty array
	```javascript
	useEffect(()=>{
		//code block
	}, [])
	```

### text
```javascript

```
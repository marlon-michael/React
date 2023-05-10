import { useState } from 'react';
import './App.css';
import Component from "./components/Component";


function App() {
  const [data,setData] = useState("nothing");

  const func = (data) => {
    setData(data)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Hello react</h1>
        <h2>{data}</h2>
        
        <Component func = {func} text = "Hello props" number = {1}></Component>
      
      </header>
    </div>
  );
}

export default App;

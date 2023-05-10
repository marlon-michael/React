import { useEffect, useState } from 'react';
import './App.css';
import Component from "./components/Component";


function App() {
  const [data,setData] = useState([]);
  const func = (data) => {setData(data)}  

  return (
    <div className="App">
      <header className="App-header">

        <h1>Hello react</h1>
        {data.map(d => <div>{d}</div>)}
        
        <Component func = {func} text = "Hello props" number = {1}></Component>
      
      </header>
    </div>
  );
}

export default App;

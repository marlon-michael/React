import './App.css';
import Component from "./components/Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello react</h1>
        <Component text = "Hello props"></Component>
      </header>
    </div>
  );
}

export default App;

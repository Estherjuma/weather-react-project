import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World from react
        </h1>
        <Weather city="paris" />
      </header>
    </div>
  );
}

export default App;

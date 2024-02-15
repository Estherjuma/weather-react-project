import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Weather App
        </h1>
        <Weather />
        <p>This project was coded by 
          <a href="https://github.com/Estherjuma">Esther Juma</a> and is
           <a href="https://github.com/Estherjuma/weather-react-project"> open-sourced on Github</a>
           </p>
      </header>
    </div>
  );
}

export default App;

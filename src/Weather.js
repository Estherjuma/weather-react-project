import React, {useState} from "react";
import axios from "axios";


export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [icon, setIcon] = useState(null);

  function showForecast(response) {
    setCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (temperature) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
        <h3>The weather in {city}</h3>
        <ul>
          <li>Temperature: {Math.round(temperature)}&deg;C</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind speed: {wind}km/h</li>
          <li>Description: {description}</li>
          <li>
            <img src={icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <input type="Submit" value="search" />
        </form>
        <h2>Loading...</h2>
      </div>
    );
  }
}



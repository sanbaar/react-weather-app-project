import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <body>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} id="search-city">
              <input
                type="text"
                placeholder="Type a city"
                id="city-input"
                autofocus="on"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" id="search-button" />
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </body>
    );
  } else {
    search();
    return "Loading...";
  }
}

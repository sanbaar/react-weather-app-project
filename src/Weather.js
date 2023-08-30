import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <body>
        {" "}
        <div className="card">
          <div className="card-body">
            <form id="search-city">
              <input
                type="text"
                placeholder="Type a city"
                id="city-input"
                autofocus="on"
              />
              <input type="submit" value="Search" id="search-button" />
            </form>

            <h1>{weatherData.city}</h1>
            <div className="current-date" id="date"></div>
            <div className="description text-capitalize">
              {weatherData.description}
            </div>
            <div className="row current-day-parameters">
              <div className="col-3">
                <img src="" alt="" id="icon" />
              </div>
              <div className="col-3 temp-rain-wind">
                <i
                  className="fa-solid fa-temperature-quarter trw-icon"
                  alt="Current temperature"
                ></i>
                <span id="main-temperature"> {weatherData.temperature} </span>

                <span className="trw-units">ºC </span>
              </div>
              <div className="col-3 temp-rain-wind">
                <i
                  className="fa-light fa-droplet-percent trw-icon"
                  alt="humidity"
                ></i>
                <span id="main-humidity">{weatherData.humidity}</span>
                <span class="trw-units">% RH</span>
              </div>
              <div className="col-3 temp-rain-wind">
                <i className="fa-solid fa-wind trw-icon" alt="Wind speed"></i>
                <span id="main-wind">{weatherData.wind}</span>
                <span className="trw-units">m/s</span>
              </div>
            </div>

            <div className="weather-forecast"></div>
          </div>
        </div>
        <div className="open-source-code">
          This project was coded by Sandra Bagés-Arnal and it is{" "}
          <a
            href="https://github.com/sanbaar/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://euphonious-sundae-c00b2a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </div>{" "}
      </body>
    );
  } else {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const city = "Barcelona";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}

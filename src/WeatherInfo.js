import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="current-date" id="date">
        <FormatedDate date={props.data.date} />
      </div>
      <div className="description text-capitalize">
        {props.data.description}
      </div>
      <div className="row current-day-parameters">
        <div className="col-3" id="">
          <img src={props.data.iconURL} alt="" id="icon" />
        </div>
        <div className="col-3 temp-rain-wind">
          <i
            className="fa-solid fa-temperature-quarter trw-icon"
            alt="Current temperature"
          ></i>
          <span id="main-temperature"> {props.data.temperature} </span>

          <span className="trw-units">ºC </span>
        </div>
        <div className="col-3 temp-rain-wind">
          <i
            className="fa-light fa-droplet-percent trw-icon"
            alt="humidity"
          ></i>
          <span id="main-humidity">{props.data.humidity}</span>
          <span class="trw-units">% RH</span>
        </div>
        <div className="col-3 temp-rain-wind">
          <i className="fa-solid fa-wind trw-icon" alt="Wind speed"></i>
          <span id="main-wind">{props.data.wind}</span>
          <span className="trw-units">m/s</span>
        </div>

        <div className="weather-forecast"></div>
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
      </div>
    </div>
  );
}

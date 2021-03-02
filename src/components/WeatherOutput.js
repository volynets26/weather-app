import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

const WeatherOutput = () => {
  const [option, setOption] = useState("celsius");

  const weatherData = useSelector((state) => state.weatherData);
  const { weather, loading, error } = weatherData;

  const { temp, pressure, humidity, feels_like } = weather.main;
  console.log(weather);

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const toCelsius = (temp) => Math.round((5 / 9) * (temp - 32));
  const switchToF = () => setOption("fahrenheit");
  const switchToC = () => setOption("celsius");
  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message msg={"City not found. Please try again"} />
      ) : (
        <div>
          <div>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="fahrenheit"
                  checked={option === "fahrenheit"}
                  onChange={switchToF}
                />
                <label className="form-check-label" htmlFor="fahrenheit">
                  °F
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="celsius"
                  checked={option === "celsius"}
                  onChange={switchToC}
                />
                <label className="form-check-label" htmlFor="celsius">
                  °C
                </label>
              </div>
              {" | "}
              <span className="result-title">
                Weather in {weather.name}, {weather.sys.country}
              </span>
              <img src={iconUrl} alt="weather icon" />
              {option === "fahrenheit" ? `${temp}°F` : `${toCelsius(temp)}°C`}
            </div>
          </div>

          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Temperature:{" "}
                <b>
                  {option === "fahrenheit"
                    ? `${Math.round(temp)}°F`
                    : `${toCelsius(temp)}°C`}
                </b>{" "}
              </li>
              <li className="list-group-item">
                Conditions: {weather.weather[0].description}
              </li>
              <li className="list-group-item">
                Feels like:{" "}
                <b>
                  {option === "fahrenheit"
                    ? `${Math.round(feels_like)}°F`
                    : `${toCelsius(feels_like)}°C`}
                </b>
              </li>
              <li className="list-group-item">Pressure: {pressure} hpa</li>
              <li className="list-group-item">Humidity: {humidity} %</li>
              <li className="list-group-item">
                Wind speed: {weather.wind.speed} m/s
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherOutput;

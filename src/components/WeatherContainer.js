import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import WeatherOutput from "./WeatherOutput";

const WeatherContainer = () => {
  const weatherData = useSelector((state) => state.weatherData);
  const { weather, loading, error } = weatherData;

  if (error) {
    return <Message />;
  } else if (loading) {
    return <Loader />;
  } else if (weather.length !== 0) {
    return <WeatherOutput />;
  } else {
    return null;
  }
};

export default WeatherContainer;

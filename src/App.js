import React from "react";
import Search from "./components/Search";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <Search />
      <WeatherContainer />
    </div>
  );
}

export default App;

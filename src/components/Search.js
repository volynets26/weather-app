import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getWeatherByCity,
  getWeatherByCurrentLocation,
} from "../redux/actions/weatherActions";

const Search = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let latitude = position.coords.latitude;
  //       let longitude = position.coords.longitude;
  //       dispatch(getWeatherByCurrentLocation(latitude, longitude));
  //     });
  //   }
  // };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getWeatherByCity(city));
    setCity("");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        dispatch(getWeatherByCurrentLocation(latitude, longitude));
      });
    }
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-center py-4">
        <form className="form-inline" onSubmit={handleClick}>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Get Weather
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;

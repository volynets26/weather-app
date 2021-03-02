import axios from "axios";
import * as types from "./actionsType";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "4d8412789b2cc58570962a08e560eabf";

export const getWeatherByCurrentLocation = (lat, lon) => async (dispatch) => {
  try {
    dispatch({ type: types.WEATHER_DATA_REQUEST });

    const { data } = await axios.get(
      `${baseUrl}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    );

    dispatch({ type: types.WEATHER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.WEATHER_DATA_FAIL, payload: error });
  }
};

export const getWeatherByCity = (city) => async (dispatch) => {
  try {
    dispatch({ type: types.WEATHER_DATA_REQUEST });

    const {data} = await axios.get(`${baseUrl}q=${city}&appid=${apiKey}&units=imperial`);

    dispatch({ type: types.WEATHER_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: types.WEATHER_DATA_FAIL, payload: error })
  }
}

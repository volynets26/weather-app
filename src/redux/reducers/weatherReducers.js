import * as types from "../actions/actionsType";

export const weatherDataReducer = (state = { weather: [] }, action) => {
  switch (action.type) {
    case types.WEATHER_DATA_REQUEST:
      return { loading: true, weather: [] };
    case types.WEATHER_DATA_SUCCESS:
      return { loading: false, weather: action.payload };
    case types.WEATHER_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { weatherDataReducer } from "./weatherReducers";

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
});

export default rootReducer;

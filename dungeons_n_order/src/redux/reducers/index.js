import { combineReducers } from "redux";
import characterReducer from "./characters";
import itemReducer from "./items"

export default combineReducers({characterReducer,itemReducer});

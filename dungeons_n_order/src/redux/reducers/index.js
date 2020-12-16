import { combineReducers } from "redux";
import characterReducer from "./characters";
import itemReducer from "./items"
import monsterReducer from './monsters'

export default combineReducers({characterReducer,itemReducer,monsterReducer});

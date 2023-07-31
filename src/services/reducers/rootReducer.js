import { combineReducers } from "redux";
import { cardItemReducer } from "./cardItems";
export const rootReducer = combineReducers({
  cardItem: cardItemReducer,
});

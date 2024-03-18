import { combineReducers } from "redux";
import { cardItemReducer } from "./cardItems";
import { cardsReducer } from "./cards";
export const rootReducer = combineReducers({
  cardItem: cardItemReducer,
  cards: cardsReducer,
});

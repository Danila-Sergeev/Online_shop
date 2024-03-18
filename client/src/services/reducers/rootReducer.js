import { combineReducers } from "redux";
import { cardItemReducer } from "./cardItems";
import { cardsReducer } from "./cards";
import { cardReducer } from "./card";
export const rootReducer = combineReducers({
  cardItem: cardItemReducer,
  cards: cardsReducer,
  card: cardReducer,
});

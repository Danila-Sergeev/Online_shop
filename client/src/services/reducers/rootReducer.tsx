import { combineReducers } from "redux";
import { cardItemReducer } from "./cardItems";
import { cardsReducer } from "./cards";
import { cardReducer } from "./card";
import { store } from "../store";
export const rootReducer = combineReducers({
  cardItem: cardItemReducer,
  cards: cardsReducer,
  card: cardReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { GET_CARDS } from "../actions/cards";
import { ICard, ICardPayloadData } from "../constants";

interface IGetCards {
  readonly type: typeof GET_CARDS;
  readonly data: ICard[];
  readonly payload: ICardPayloadData;
}

export type ICardsActions = IGetCards;

type TinitialState = {
  cards: ICard[];
};

const initialState: TinitialState = {
  cards: [],
};

export const cardsReducer = (state = initialState, action: ICardsActions) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

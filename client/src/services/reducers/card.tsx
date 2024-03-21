import { GET_CARD } from "../actions/card";
import { ICard, ICardPayloadData } from "../constants";

interface IGetCard {
  readonly type: typeof GET_CARD;
  readonly data: ICard[];
  readonly payload: ICardPayloadData;
}

export type ICardActions = IGetCard;

type TinitialState = {
  card: ICard[];
};

const initialState: TinitialState = {
  card: [],
};

export const cardReducer = (state = initialState, action: ICardActions) => {
  switch (action.type) {
    case GET_CARD: {
      return {
        ...state,
        card: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

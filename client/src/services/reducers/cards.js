import { GET_CARDS } from "../actions/cards";

const initialState = {
  cards: [],
};

export const cardsReducer = (state = initialState, action) => {
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

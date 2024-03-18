import { GET_CARD } from "../actions/card";

const initialState = {
  card: [],
};

export const cardReducer = (state = initialState, action) => {
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

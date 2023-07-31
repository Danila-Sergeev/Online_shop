import { REMOVE_ITEM, RESET_ITEM, ADD_ITEM } from "../actions/cardItems";

const initialState = {
  items: [],
};
export const cardItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.item],
      };
    }
    case RESET_ITEM: {
      return {
        ...state,
        items: [],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
};

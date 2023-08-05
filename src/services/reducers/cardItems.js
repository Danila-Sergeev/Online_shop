import {
  REMOVE_ITEM,
  RESET_ITEM,
  ADD_ITEM,
  DECREASE_COUNT,
} from "../actions/cardItems";

const initialState = {
  items: [],
  unq: [],
};
export const cardItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.item],
        unq: [...state.items, action.item].filter(
          (elem, index) =>
            [...state.items, action.item].findIndex(
              (obj) => obj.props.id === elem.props.id
            ) === index
        ),
      };
    }
    case RESET_ITEM: {
      return {
        ...state,
        items: [],
        unq: [],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.props.id !== action.id),
        unq: state.unq.filter((item) => item.props.id !== action.id),
      };
    }
    case DECREASE_COUNT: {
      return {
        ...state,
        items: state.items.filter((item) => item.id4 !== action.item.id4),
        unq: state.items
          .filter((item) => item.id4 !== action.item.id4)
          .filter(
            (elem, index) =>
              state.items
                .filter((item) => item.id4 !== action.item.id4)
                .findIndex((obj) => obj.props.id === elem.props.id) === index
          ),
        //unq: state.unq.filter((item) => item.id4 !== action.id4),
      };
    }
    default: {
      return state;
    }
  }
};

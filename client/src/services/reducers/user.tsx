import { SIGNIN, SIGNOUT, SIGNUP } from "../actions/user";
import { ICard, ICardPayloadData } from "../constants";

interface IGetCards {
  readonly type: typeof SIGNUP;
  readonly data: ICard[];
  readonly payload: ICardPayloadData;
}

export type ICardsActions = IGetCards;

type TinitialState = {
  name: string;
  email: string;
  role: string;
  isAuth: boolean;
};

const initialState: TinitialState = {
  name: "",
  email: "",
  role: "",
  isAuth: false,
};

export const userReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case SIGNUP: {
      return {
        ...state,
        name: action.payload.data.name,
        email: action.payload.data.email,
        isAuth: true,
      };
    }
    case SIGNIN: {
      return {
        ...state,
        email: action.payload.data.email,
        isAuth: true,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        name: "",
        email: "",
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};

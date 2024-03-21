import axios from "axios";
import { useAppDispatch } from "../../utils/hoc";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

export const signup = (name: string, email: string, password: string) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}signup`,
      {
        name,
        email,
        password,
      }
    );
    console.log(response);
    dispatch({
      type: SIGNUP,
      payload: response,
    });
  };
};

export const signin = (email: string, password: string) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}signin`,
      {
        email,
        password,
      }
    );
    console.log(response);
    dispatch({
      type: SIGNIN,
      payload: response,
    });
  };
};

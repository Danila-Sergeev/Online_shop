import axios from "axios";
import { useAppDispatch } from "../../utils/hoc";

export const GET_CARDS = "GET_CARDS";

export const getCards = () => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}cards`);
    dispatch({
      type: GET_CARDS,
      payload: response,
    });
  };
};

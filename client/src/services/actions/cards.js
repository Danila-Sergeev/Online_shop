import axios from "axios";
import { useDispatch } from "react-redux";

export const GET_CARDS = "GET_CARDS";

export const getCards = () => {
  return async (dispatch = useDispatch()) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}cards`);
    dispatch({
      type: GET_CARDS,
      payload: response,
    });
  };
};

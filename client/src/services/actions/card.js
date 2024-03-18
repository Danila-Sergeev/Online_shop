import axios from "axios";
import { useDispatch } from "react-redux";

export const GET_CARD = "GET_CARD";

export const getCard = (id) => {
  return async (dispatch = useDispatch()) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}cards/${id}`
    );
    dispatch({
      type: GET_CARD,
      payload: response,
    });
  };
};

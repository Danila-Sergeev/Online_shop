import axios from "axios";
import { useAppDispatch } from "../../utils/hoc";

export const GET_CARD = "GET_CARD";

export const getCard = (id: string | undefined) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}cards/${id}`
    );
    dispatch({
      type: GET_CARD,
      payload: response,
    });
  };
};

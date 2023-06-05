import axios from "axios";
import * as actionType from "../constants/cartConstant.js";
const URL = "http://localhost:8000";
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_FAIL, payload: error.message });
  }
};

export const removeFromCart = () => {};

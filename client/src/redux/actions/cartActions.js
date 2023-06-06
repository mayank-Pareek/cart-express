import axios from "axios";
import * as actionType from "../constants/cartConstant.js";

const URL = "https://cart-express-api.herokuapp.com";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_FAIL, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
  } catch (error) {
    dispatch({
      type: actionType.REMOVE_FROM_CART_FAIL,
      payload: error.message,
    });
  }
};

export const resetCart = () => (dispatch) => {
  dispatch({ type: actionType.CART_RESET });
};

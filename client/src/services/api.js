import axios from "axios";
const URL = "https://cart-express-api.herokuapp.com";
export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error calling sign-up api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error calling login api", error);
    return error.response;
  }
};
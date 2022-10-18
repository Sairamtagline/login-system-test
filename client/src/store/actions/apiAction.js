import axios from "axios";
import { handleToast } from "../../utils/toastFn";

export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/sign-in`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data.data;
      localStorage.setItem("token", token);
      handleToast().successMsg(response.data.message);
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const signUpAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/sign-up`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleToast().successMsg(response.data.message);
      dispatch({
        type: "SIGNUP",
        email,
      });
    } catch (error) {
      console.log(error);
      handleToast().errorMsg(
        error.response?.data?.error ||
          error.response?.data?.errors?.[0]?.message
      );
    }
  };

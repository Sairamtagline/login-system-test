import axios from 'axios';

export const loginAction = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = response.data;
    localStorage.setItem("token", token);
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/signup",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = response.data;
    localStorage.setItem("token", token);
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  } catch (error) {
    console.log(error);
  }
};

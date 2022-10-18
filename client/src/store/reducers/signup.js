const initialState = {
  isAuthenticated: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default signupReducer;

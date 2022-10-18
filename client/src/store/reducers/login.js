const initialState = {
  isAuthenticated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default loginReducer;

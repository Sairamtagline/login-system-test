const initialState = {
  isAuthenticated: false,
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;

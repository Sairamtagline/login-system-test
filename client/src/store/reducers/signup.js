const initialState = {
  changeTab: false,
  email: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        changeTab: true,
        email: action.email,
      };
    case "CHANGE_TAB":
      return {
        ...state,
        changeTab: false,
      };
    default:
      return state;
  }
};

export default signupReducer;

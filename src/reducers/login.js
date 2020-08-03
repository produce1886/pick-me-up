export const initialState = {
  isSignedIn: false,
  name: "",
  email: "",
  profile_pic: "",
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "IN": {
      newState = Object.assign({}, state, action);
      return newState;
    }
    case "OUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;

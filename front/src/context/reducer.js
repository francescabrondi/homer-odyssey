import { GET_USER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

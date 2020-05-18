import React, { useReducer } from "react";

import Context from "./index";
import reducer from "./reducer";

import { GET_USER } from "./types";

const State = (props) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = () => {
    await axios.post("/auth/signin", form);
    dispatch({ type: GET_USER });
  };

  return (
    <Context.Provider
      value={{
        user: state.user,
        getUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

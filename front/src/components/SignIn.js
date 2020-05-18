import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../context";

const signIn = () => {
  const { login } = useContext(Context);

  const submitForm = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <div className="signin">
      <div className="input">
        <div className="image">
          <img
            src="http://pngimg.com/uploads/simpsons/simpsons_PNG2.png"
            alt=""
          />
        </div>
        <form action="/" method="POST">
          <h1>Login</h1>
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <NavLink to="/profile">
            <button type="submit" onClick={submitForm}>
              Log In
            </button>
          </NavLink>
          <p className="new">New here?</p>
          <NavLink to="/auth/signup">
            <p className="redirect-two">Register now!</p>
          </NavLink>
        </form>
      </div>
      <div className="profile"></div>
    </div>
  );
};

export default signIn;

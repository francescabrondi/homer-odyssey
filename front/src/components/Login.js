import React from "react";
import { NavLink } from "react-router-dom";

const signIn = () => {
  return (
    <div className="input">
      <form action="/" method="POST">
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Log In" />
      </form>
      <p className="new">New here?</p>
      <NavLink to="/register">
        <p className="redirect-two">Register now!</p>
      </NavLink>
    </div>
  );
};

export default signIn;

import React from "react";
import { NavLink } from "react-router-dom";

const signIn = () => {
  return (
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
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">Log In</button>
        <p className="new">New here?</p>
        <NavLink to="/auth/signup">
          <p className="redirect-two">Register now!</p>
        </NavLink>
      </form>
    </div>
  );
};

export default signIn;

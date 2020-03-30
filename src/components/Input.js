import React from "react";
import { NavLink } from "react-router-dom";

const input = () => {
  return (
    <div className="input">
      <form action="/" method="POST">
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="surname" name="surname" placeholder="Surname" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Register" />
      </form>
      <p className="redirect-one">Already registered?</p>
      <NavLink to="/login">
        <p className="redirect-two">Log in</p>
      </NavLink>
    </div>
  );
};

export default input;

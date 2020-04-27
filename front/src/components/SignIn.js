import React from "react";
import { NavLink } from "react-router-dom";

const signIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/auth/signin", form);
    console.log(response);
    setFlash(true);
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
            <button type="submit" onClick={handleSubmit}>
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

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

const Input = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [flash, setFlash] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/auth/signup", form);
    console.log(response);
    setFlash(true);
  };

  const { name, lastname, email, password } = form;

  return (
    <div className="signup">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <h1>
            Registration data: <span>{`${name} ${lastname}`}</span>
          </h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
            value={name}
            onChange={onChange}
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last name"
            value={lastname}
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <button type="submit">Register</button>
          <p className="redirect-one">Already registered?</p>
          <NavLink to="/signin">
            <p className="redirect-two">Log in</p>
          </NavLink>
        </form>
        <div className="image">
          <img
            src="http://pngimg.com/uploads/simpsons/simpsons_PNG80.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

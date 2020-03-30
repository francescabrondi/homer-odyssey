import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Input = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  const { name, surname, email, password } = form;

  return (
    <div className="input">
      <h1>{`${name}, ${surname}`}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname"
          value={surname}
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
          type="text"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
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

export default Input;

import React, { useState, useContext, useEffect } from "react";
import "../MyStyle/Auth.css";
import AuthContext from "../../context/auth/authContext";
import { Alert } from "../utils/Alert";
export const Register = (props) => {
  const authContext = useContext(AuthContext);
  const [alert, changealertok] = useState(null);

  const { register, error, isAuthenticated } = authContext;
  const changealert = (errhai) => {
    changealertok(errhai);
    setTimeout(() => {
      changealertok(null);
    }, 5000);
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error !== null) {
      changealert(error);
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, name, password, password2 } = user;

  const onChange = (e) => {
    if (e.target.name === "email") {
      localStorage.setItem("localemail", e.target.value);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      changealert("please enter all fields ");
    } else if (password !== password2) {
      changealert("password do not match");
    } else {
      register({
        name,
        email: email.toLowerCase(),
        password,
      });
    }
  };
  return (
    <div className="away-nav container">
      {alert && <Alert text={alert} />}
      <div className="center col s12">
        <h1>
          <span className="apuTheme">Account</span>{" "}
          <span className="text-primary">Register</span>
        </h1>

        <form onSubmit={onSubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              minLength="3"
              type="text"
              className="Authinput"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="Authinput"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              minLength="6"
              className="Authinput"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password2">Confirm Password</label>
            <input
              className="Authinput"
              minLength="6"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="left btn green accent-4 btn-white"
          />
        </form>
      </div>
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import "../MyStyle/Auth.css";
import AuthContext from "../../context/auth/authContext";
import { Alert } from "../utils/Alert";
import apu from "../MyStyle/ok.png";
import { Loading } from "../utils/Loading";

export const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { login, error, isAuthenticated, clearErrors } = authContext;
  const [alert, changealert] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid credential") {
      changealert("Invalid credential");
      setTimeout(() => {
        clearErrors(null);
        changealert(null);
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: localStorage.getItem("localemail") || "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    if (e.target.name === "email") {
      localStorage.setItem("localemail", e.target.value);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      changealert("please fill in all details");
    } else {
      login({
        email: email.toLowerCase(),
        password,
      });
    }
  };

  return (
    <div className="away-nav container">
      <img
        src={apu}
        alt="img"
        className="myImage"
        width="200"
        style={{ borderRadius: "0px" }}
      />
      {alert && <Alert text={alert} />}

      <div className="center col s12">
        <h1>
          <span className="apuTheme">Account</span>{" "}
          <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className=" input-field">
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
              className="Authinput"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            value="Login"
            className=" left btn green accent-4 btn-white"
          />

          <input
            type="button"
            value="Use Guest Login"
            className=" left btn blue accent-4 btn-white"
            style={{ marginLeft: "20px" }}
            onClick={() => {
              login({
                email: "guest@gmail.com",
                password: "guest#123",
              });
            }}
          />
        </form>
        {loading && (
          <div className="center" style={{ width: "100px" }}>
            <Loading color={"white"} />
          </div>
        )}
      </div>
    </div>
  );
};

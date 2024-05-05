import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import HomeContext from "../../context/home/HomeContext";
import apunerd from "../MyStyle/nerd.png";
import apusearch from "../MyStyle/search.png";

export const Header = () => {
  const authContext = useContext(AuthContext);
  const homeContext = useContext(HomeContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearKeeps, filtered, clearFilter } = homeContext;
  const onLogout = () => {
    clearKeeps();
    clearFilter();
    logout();
  };
  const searchingApu = (
    <Link to="/" className="left brand-logo">
      <img
        src={apusearch}
        alt="apu-search"
        style={{ height: "56px", verticalAlign: "bottom" }}
      />
      <span className=" hide-on-small-only">Apu-searching</span>
    </Link>
  );
  const defaultApu = (
    <Link to="/" className="left brand-logo">
      <img
        src={apunerd}
        alt="apu-default"
        style={{ height: "56px", verticalAlign: "bottom" }}
      />
      <span className=" hide-on-small-only">Apu-keeper</span>
    </Link>
  );

  const noApu = (
    <Link to="/" className="left brand-logo">
      Apu-keeper
    </Link>
  );

  const authLinks = (
    <Fragment>
      <ul className="right noselect">
        <li>Hello {user && user.name}</li>{" "}
        <li>
          <a href="/login" onClick={onLogout}>
            <i className="material-icons">exit_to_app</i>{" "}
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul className="right">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div>
      <nav>
        <div className="grey darken-4 nav-wrapper">
          {filtered ? searchingApu : isAuthenticated ? defaultApu : noApu}
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    </div>
  );
};

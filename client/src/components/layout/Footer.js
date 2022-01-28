import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Fragment>
      <div className="myfooter">
          made with ❤️ by <span><Link to="/about">Apu</Link></span>
      </div>
    </Fragment>
  );
};

import React from "react";

export const Alert = ({ text }) => {
  return (
    <div>
      <div className="card-panel red darken-3">
        <i className="material-icons">info</i>{" "}
        <span className="white-text text-darken-2" style={{verticalAlign:"super"}}>
          {text}
        </span>
      </div>
    </div>
  );
};

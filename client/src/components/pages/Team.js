import React from "react";

export const Team = ({ name, image, msg }) => {
  return (
    <div style={{ width: "300px" }}>
      <img alt="myteamimg" className="myImage" width="150" src={image} />
      <h5>
        <code>{name}</code>
      </h5>
      <p>{msg}</p>
    </div>
  );
};

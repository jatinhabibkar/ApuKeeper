import React from "react";
import HomeContext from "../../context/home/HomeContext";
import { useContext } from "react";
export const ViewPort = () => {
  const homeContext = useContext(HomeContext);

  const { setCurrent, delKeep, changeView, view, current } = homeContext;

  return (
    <div className="items">
      <div className="myicons">
        <i className="noselect material-icons" onClick={() => changeView()}>
          arrow_back
        </i>
      </div>
      <div className="title">{view.title}</div>
      <div className="main-task" style={{ height: "60vh" }}>
        {view.parg}
      </div>
      <div className="flexBox">
        <div className="myicons">
          <div className="noselect material-icons">create</div>
        </div>
        <div className="myicons">
          <i className="noselect material-icons">delete</i>
        </div>
      </div>
    </div>
  );
};

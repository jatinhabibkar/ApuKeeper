import React, { Fragment, useState, useContext, useEffect } from "react";
import "./MyStyle/Home.css";
import HomeContext from "../context/home/HomeContext";
import { MyLinkify } from "./utils/MyLinkify";
import { Loading } from "./utils/Loading";
export const KeepCard = ({ item }) => {
  const homeContext = useContext(HomeContext);

  const { _id, title, parg } = item;

  const { current, setCurrent, clearCurrent, updateKeep, delKeep } =
    homeContext;

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (current == null) {
      setLoading(false);
    }
  }, [current]);

  if (current && current._id === item._id) {
    return (
      <div className="items">
        {loading && <Loading />}
        <div className="main-task-editbar">
          <input
            type="text"
            name="title"
            className="woborder title"
            placeholder="update title..."
            value={current.title}
            onChange={onChange}
          />
          <textarea
            _id="textarea1"
            name="parg"
            className="woborder materialize-textarea"
            placeholder="update a note..."
            type="text"
            value={current.parg}
            onChange={onChange}
            style={current.parg === "" ? editorstyle : fillstyle}
          />
        </div>

        <div className="flexBox">
          <div className="myicons">
            <div className=" material-icons" onClick={() => clearCurrent()}>
              clear
            </div>
          </div>
          <div className="myicons">
            <div
              className="material-icons"
              onClick={() => {
                updateKeep(current);
                setLoading(true);
              }}
            >
              check
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="items">
        {loading && <Loading />}

        {(parg !== "" && title === "") || (parg === "" && title !== "") ? (
          <h5 className="main-task">
            <MyLinkify text={parg || title} />
          </h5>
        ) : (
          <Fragment>
            <div className="title">
              <MyLinkify text={title} />
            </div>
            <div className="main-task">
              <MyLinkify text={parg} />
            </div>
          </Fragment>
        )}

        <div className="flexBox">
          <div className="myicons">
            <div
              className="noselect material-icons"
              onClick={() => setCurrent(item)}
            >
              create
            </div>
          </div>
          <div className="myicons">
            <i
              className="noselect material-icons"
              onClick={() => {
                setLoading(true);
                delKeep(_id);
              }}
            >
              delete
            </i>
          </div>
        </div>
      </div>
    );
  }
};

const editorstyle = {
  height: "45px",
};

const fillstyle = {
  height: "200px",
};

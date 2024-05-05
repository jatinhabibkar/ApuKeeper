import React, { useState, useEffect, useContext } from "react";
import "../MyStyle/EditBar.css";
import HomeContext from "../../context/home/HomeContext";

export const EditBar = () => {
  const homeContext = useContext(HomeContext);
  const { addKeep, filterKeep, clearFilter } = homeContext;

  const [keep, setkeep] = useState({
    title: "",
    parg: "",
  });

  // discard cahnges
  const handleDiscard = () => {
    setkeep({
      title: "",
      parg: "",
    });
    removeLC("title");
    removeLC("parg");
  };

  // submit function
  const handleSubmit = () => {
    // discard if ur entered empty field
    if (keep.title.trim() === "" && keep.parg.trim() === "") {
      handleDiscard();
    } else {
      addKeep(keep);
      handleDiscard();
    }
  };

  // localStorage
  useEffect(() => {
    const titlehai = localStorage.getItem("title") || "";
    const parghai = localStorage.getItem("parg") || "";
    setkeep({
      title: titlehai,
      parg: parghai,
    });
  }, []);
  // remove localstorage
  const removeLC = (val) => {
    localStorage.removeItem(val);
  };

  // search engine
  const [searchbar, setbar] = useState(false);
  const onSearch = (e) => {
    filterKeep(e.target.value.replaceAll("\\", ""));
  };

  return (
    <div className="editbar">
      {keep.parg + keep.title !== "" && (
        <div className="title-editbar">
          <input
            className="woborder"
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            autoComplete="off"
            value={keep.title}
            onChange={(e) => {
              setkeep({ ...keep, [e.target.name]: e.target.value });
              localStorage.setItem("title", e.target.value);
            }}
          />
        </div>
      )}
      <div className="main-task-editbar flexBox">
        {!searchbar && (
          <textarea
            id="textarea1"
            name="parg"
            className="materialize-textarea woborder"
            placeholder="Take a note..."
            style={keep.parg === "" ? editorstyle : fillstyle}
            value={keep.parg}
            onChange={(e) => {
              setkeep({ ...keep, [e.target.name]: e.target.value });
              localStorage.setItem("parg", e.target.value);
            }}
          />
        )}

        {searchbar && (
          <input
            className="woborder"
            type="text"
            placeholder="Search"
            id="title"
            name="title"
            autoComplete="off"
            onChange={onSearch}
            autoFocus
          />
        )}

        {keep.parg + keep.title === "" &&
          (!searchbar ? (
            <div className="myicons2" onClick={() => setbar(true)}>
              <i className="material-icons noselect search-icon">search</i>
            </div>
          ) : (
            <div
              className="myicons2"
              onClick={() => {
                setbar(false);
                clearFilter();
              }}
            >
              <i className="material-icons noselect search-icon">close</i>
            </div>
          ))}
      </div>
      {keep.parg + keep.title !== "" && (
        <div className="editButton">
          <span className="mybuttons" onClick={handleSubmit}>
            done
          </span>
        </div>
      )}
    </div>
  );
};

const editorstyle = {
  height: "45px",
};

const fillstyle = {
  height: "100px",
};

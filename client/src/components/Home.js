import React, { useContext } from "react";
import "./MyStyle/Home.css";
import StackGrid from "react-stack-grid";
import updateLayout from "react-stack-grid";
import { KeepCard } from "./KeepCard";
import { EditBar } from "./InputComponents/EditBar";
import HomeContext from "../context/home/HomeContext";
import AuthContext from "../context/auth/authContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const Home = () => {
  const homeContext = useContext(HomeContext);
  const authContext = useContext(AuthContext);
  const { keeps, getKeeps, filtered } = homeContext;
  const { loading, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getKeeps();
    // eslint-disable-next-line
  }, []);
  const loadingblock = (
    <h2 className="center" style={{ color: "var(--white)" }}>
      loading...
    </h2>
  );

  const plzaddblock = (
    <h2 className="center" style={{ color: "var(--white)" }}>
      take a note
    </h2>
  );

  return (
    <div>
      <div className="away-nav Homecontainer ">
        <EditBar />

        <div className="collections">
          {keeps !== null && !loading ? (
            keeps !== null && !loading && keeps.length === 0 ? (
              plzaddblock
            ) : filtered !== null ? (
              <StackGrid columnWidth={240}>
                {keeps.filter((item) => {
                  if (filtered.includes(item._id))
                    return true
                  else
                    return false
                }).map((item)=>(
                  <KeepCard
                        item={item}
                        key={item._id}
                        updateLayout={updateLayout}
                      />
                ))}
              </StackGrid>
            ) : (
              <StackGrid columnWidth={240}>
                {keeps.map((item) => {
                  return (
                    <KeepCard
                      item={item}
                      key={item._id}
                      updateLayout={updateLayout}
                    />
                  );
                })}
              </StackGrid>
            )
          ) : (
            loadingblock
          )}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  keeps: PropTypes.array,
};

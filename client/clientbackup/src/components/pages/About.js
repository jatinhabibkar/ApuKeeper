import React, { useEffect } from "react";
import jatinphoto from "../MyStyle/me.jpg";
import ApuArt from "../MyStyle/Team/ApuArt.jpeg";
import CEO from "../MyStyle/Team/CEO.jpeg";
import Invester from "../MyStyle/Team/Invester.jpeg";
import Apumilk from "../MyStyle/Team/Apumilk.jpeg";
import Security from "../MyStyle/Team/Security.jpeg";
import Customer from "../MyStyle/Team/Customer.jpeg";
import M from "materialize-css/dist/js/materialize.min.js";

import { Team } from "./Team";

export const About = () => {
  useEffect(() => {
    if (window.location.pathname.toLowerCase() !== "/about")
      M.toast({ html: "404 page not found", classes: "red darken-3" });
    else M.toast({ html: "Meet the team :)", classes: "green accent-4" });
  }, []);

  const alldata = [
    {
      name: "Apu UI/UX",
      msg: "Jine mera dil luteya oho jine mera maar sutiya",
      image: ApuArt,
    },
    {
      name: "Apu Frontend Engineer",
      msg: "Coffee are overrated consider chocolate milkshake",
      image: Apumilk,
    },
    {
      name: "Apu Backend Engineer",
      msg: "One word javascript ",
      image: Security,
    },
    {
      name: "Apu-keeper Customer",
      msg: "Great UI and great Tech makes me\n use Apu-keeper more ",
      image: Customer,
    },
    {
      name: "Apu Invester",
      msg: "First Investor in Apu-Keeper",
      image: Invester,
    },
    { name: "Jatin", msg: "Collabrating with All Apus", image: jatinphoto },
  ];
  return (
    <div className="away-nav  container">
      <img alt="CEO" className="myImage" width="150" src={CEO} />
      <div className="aboutText center white-text">
        <h5>
          <code>Apu Apustaja</code>
        </h5>
        <p>Hola! Apu apustaja CEO of Apu-keeper</p>

        <h2> </h2>
        <h2>*Meet my Team*</h2>

        <div className="flexBox2" style={{ flexWrap: "wrap" }}>
          {alldata.map((apu, index) => {
            return <Team {...apu} key={index} />;
          })}
        </div>

        <div className="flexBox2 space-top">
          <div className="item">
            <a
              href="https://github.com/JATIN2111999"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./socialicon/github.svg"
                alt="github"
                className="infoIcon"
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.linkedin.com/in/jatinhabibkar/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./socialicon/linkedin.svg"
                alt="linkedin"
                className="infoIcon"
              />
            </a>
          </div>

          <div className="item">
            <a
              href="https://twitter.com/jatinhabibkar"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./socialicon/twitter.svg"
                alt="twitter"
                className="infoIcon"
              />
            </a>
          </div>

          <div className="item">
            <a
              href="mailto:jatinkrishnahabibkar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./socialicon/mails.svg"
                alt="mail"
                className="infoIcon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

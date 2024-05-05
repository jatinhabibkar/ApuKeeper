import jatinphoto from "/public/Team/me.jpg";
import ApuArt from "/public/Team/ApuArt.jpeg";
import Invester from "/public/Team/Invester.jpeg";
import Apumilk from "/public/Team/Apumilk.jpeg";
import Security from "/public/Team/Security.jpeg";
import Customer from "/public/Team/Customer.jpeg";
import CEO from "/public/Team/CEO.jpeg"

import linkedinIcon from "/public/socialicon/linkedin.svg"
import twitterIcon from "/public/socialicon/twitter.svg"
import githubIcon from "/public/socialicon/github.svg"
import mailsIcon from "/public/socialicon/mails.svg"
import "../../styles/materialize.css"
import { Team } from "@/app/about/Team";
import { useEffect } from "react";
import { useRouter } from 'next/router';


export function About() {
    const router = useRouter();

    useEffect(() => {
        const path = router.pathname;
        const M = require('materialize-css/dist/js/materialize');

        if (path === "/about") {
            M.toast({ html: "404 page not found", classes: "red darken-3" });
        } else {
            M.toast({ html: "Meet the team :)", classes: "green accent-4" });
        }
    }, [router.pathname]);

    const alldata = [
        {
            name: "Apu UI/UX",
            msg: "Jine mera dil luteya oho jine mera maar sutiya",
            image: ApuArt.src,
        },
        {
            name: "Apu Frontend Engineer",
            msg: "Coffee are overrated consider chocolate milkshake",
            image: Apumilk.src,
        },
        {
            name: "Apu Backend Engineer",
            msg: "One word javascript ",
            image: Security.src,
        },
        {
            name: "Apu-keeper Customer",
            msg: "Great UI and great Tech makes me\n use Apu-keeper more ",
            image: Customer.src,
        },
        {
            name: "Apu Invester",
            msg: "First Investor in Apu-Keeper",
            image: Invester.src,
        },
        { name: "Jatin", msg: "Collabrating with All Apus", image: jatinphoto.src },
    ];
    return (
        <div className="away-nav  container">
            <img alt="CEO" className="myImage" width="150" src={CEO.src} />
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
                            href="https://github.com/jatinhabibkar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={githubIcon.src}
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
                                src={linkedinIcon.src}
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
                                src={twitterIcon.src}
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
                                src={mailsIcon.src}
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

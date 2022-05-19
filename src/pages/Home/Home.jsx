import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  const nameArray = ["u", "s", "h", "a", "n", "t"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".  ",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 4000);
  }, []);
  return (
    <div>
      <div className="homePage absolute left-[10%] top-[50%] -translate-y-[50%] w-[40%] max-h-[90%]">
        <h1 className="text-white text-[56px] leading-[53px] m-0 font-coolvetica font-normal">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span> <br />
          <span className="flex items-center">
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Namer"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
          </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={22}
          />
        </h1>
        <h2>Frontend Developer | Javascript Programmer</h2>
        <Link to="/contact" className="flatButton">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;

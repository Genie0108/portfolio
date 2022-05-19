import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LogoTitle from "../../assets/images/logo-s.png";

const Home = () => {
  return (
    <div className="homePage">
      <div className="absolute left-[10%] top-[50%] -translate-y-[50%] w-[40%] max-h-[90%]">
        <h1 className="text-white text-[56px] leading-[53px] m-0 font-coolvetica font-normal">
          Hi, <br />
          <span className="flex">
            I'm
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Namer"
            />
            ushant
          </span>
          web developer.
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

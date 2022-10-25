import { useState, useEffect } from "react";
import "./about.css";
import AniamtedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);
  return (
    <div className="aboutPage container sm:pl-8 sm:pr-8">
      {/* details section */}
      <div className="xl:w-1/2 max-h-[90%] lg:absolute top-[17%] left-[10%] table-cell align-middle pl-10 pr-10">
        <h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal mt-0 relative mb-20 left-3">
          <AniamtedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            index={15}
          />
        </h1>
        <div>
          <p>
            I'm a Front End Developer based in Kathmandu, Nepal. I help
            businesses bring their ideas to life through my design and
            development expertise.
          </p>
          <p>
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of MCU, outdoor activities, and nature
            enthusiasts.
          </p>
          <p>
            Interested in the frontend spectrum and working on ambitious
            projects with positive people.
          </p>
        </div>
      </div>
      <div className="xl:w-1/2 absolute top-[40%] right-[3%] w-full pt-96 h-[84%] xs:pt-40 xs:h-[60%] sm:h-0 sm:pt-0 sm:fixed sm:right-0 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 xl:absolute xl:top-[20%] xl:translate-x-[0%] xl:-translate-y-1/3">
        {/* cube section */}
        <div className="cubeContainer">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

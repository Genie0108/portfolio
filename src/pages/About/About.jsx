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
    <div className="aboutPage">
      {/* details section */}
      <div className="absolute left-[10%] top-[30%] -translate[50%] w-[35%]  table-cell align-middle max-h-[90%]">
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
          <p>I'm experienced in HTML, CSS 3, Tailwind CSS, and React JS.</p>
          <p>
            I'm very ambitious Front End Developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
        </div>
      </div>
      <div>
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

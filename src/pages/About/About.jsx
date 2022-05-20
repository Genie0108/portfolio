import { useState, useEffect } from "react";
import "./about.css";
import AniamtedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);
  return (
    <div className="aboutPage">
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
        <div></div>
      </div>
    </div>
  );
};
export default About;

import React, { useEffect, useState } from "react";
import "./work.css";
import AniamtedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import MyProject from "../../components/MyProject";
import projectDetails from "./projectDetails";

const Work = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);

  return (
    <div className="workPage container sm:px-8">
      <div className="lg:absolute top-[17%] left-[10%] pl-10 pr-10">
        <h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal mt-0 relative mb-20 left-3">
          <AniamtedLetters
            letterClass={letterClass}
            strArray={["M", "y", " ", "W", "o", "r", "k", "s"]}
            index={15}
          />
        </h1>

        {/* my works */}
        <div className="pb-5">
          {projectDetails.map((project) => (
            <MyProject
              key={project.id}
              img={project.img}
              projectName={project.projectName}
              desc={project.desc}
              techStack={project.techStack}
              viewLive={project.viewLive}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

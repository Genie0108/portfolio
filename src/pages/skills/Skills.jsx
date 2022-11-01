import React, { useState, useEffect } from "react";
import "./skills.css";
import AniamtedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);
  return (
    <section className="text-white container skillsPage">
      <div className="w-[90%] max-h-[90%] lg:absolute top-[17%] left-[10%] table-cell align-middle pl-10 pr-10">
        <h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal mt-0 relative mb-20 left-3">
          <AniamtedLetters
            letterClass={letterClass}
            strArray={["M", "y", " ", "S", "k", "i", "l", "l", " s"]}
            index={15}
          />
        </h1>
        {/* skills sections*/}
        <div className="flex flex-col xl:flex-row gap-y-20 pb-16">
          {/* names */}
          <div className="w-full mt-10 pb-16 xl:w-[50%]">
            <h3 className="text-white text-5xl font-sans font-medium">
              Frontend
            </h3>
            {/* frontend */}
            <div className="flex pt-5">
              <ul className="text-lightGrey text-2xl w-1/2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <ul className="text-lightGrey text-2xl w-1/2">
                <li>React</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            {/* others */}
            <h3 className="text-white text-5xl font-sans font-medium mt-20">
              Others
            </h3>
            <div className="flex pt-5">
              <ul className="text-lightGrey text-2xl w-1/2">
                <li>Git</li>
                <li>Github</li>
              </ul>
              <ul className="text-lightGrey text-2xl w-1/2">
                <li>Responsive Design</li>
                <li>VS Code </li>
              </ul>
            </div>
          </div>

          {/* logos */}
          <div className="max-w-[720px] xl:max-w-[590px] w-full  xl:mx-auto xl:w-[50%] flex flex-wrap items-center justify-between gap-x-20 gap-y-36 xs:gap-x-40 sm:gap-x-72 xl:gap-x-52">
            <FontAwesomeIcon
              title="HTML"
              icon={faHtml5}
              // size="5x"
              className="text-[5.4em] fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />
            <FontAwesomeIcon
              title="React"
              icon={faReact}
              // size="5x"
              className="text-[5em] fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />
            <FontAwesomeIcon
              title="Git"
              icon={faGitAlt}
              // size="5x"
              className="text-[5.5em] fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />
            <FontAwesomeIcon
              title="CSS"
              icon={faCss3}
              size="4x"
              className="fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />

            <div className="">
              <svg
                viewBox="0 0 600 476.30000000000007"
                stroke="currentColor"
                fill="#05c7b8"
                strokeWidth="0"
                height="2em"
                // width="5em"
                xmlns="http://www.w3.org/2000/svg"
                title="Material UI"
                color="text-secondary"
                className="text-[2em] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              >
                <title>Material UI</title>
                <path
                  d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                  fill="#05c7b8"
                />
                <path
                  d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                  fill="#05c7b8"
                />
                <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#05c7b8" />
                <path
                  d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                  fill="#05c7b8"
                />
              </svg>
            </div>
            <FontAwesomeIcon
              title="Github"
              icon={faGithub}
              size="5x"
              className="fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />
            <FontAwesomeIcon
              title="Javascript"
              icon={faJs}
              // size="5x"
              className="text-[4.6em] fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            />
            <div className="">
              <svg
                stroke="currentColor"
                fill="#05c7b8"
                strokeWidth="0"
                viewBox="0 0 1000 1000"
                height="5em"
                width="5em"
                xmlns="http://www.w3.org/2000/svg"
                title="Tailwind CSS"
                color="text-secondary"
                className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              >
                <title>Tailwind CSS</title>
                <path
                  d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
                  fill="#05c7b8"
                />
                <path
                  d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
                  fill="#05c7b8"
                />
              </svg>
            </div>
            {/* <FontAwesomeIcon
              title="Sass"
              icon={faSass}
              size="4x"
              className="fill-current text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
            /> */}

            <div className="">
              <svg
                stroke="currentColor"
                fill="#05c7b8"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="5em"
                width="5em"
                xmlns="http://www.w3.org/2000/svg"
                color="text-secondary"
                className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              >
                <title>VS Code</title>
                <path d="M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

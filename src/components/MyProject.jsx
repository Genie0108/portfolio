import React from "react";

import TechStack from "./TechStack";

const MyProject = ({
  img,
  projectName,
  desc,
  techStack,
  viewLive,
  githubLink,
}) => {
  return (
    <div className="xl:pl-36 py-20 flex flex-col gap-10 lg:gap-20 items-center lg:flex-row">
      <div className="lg:min-w-[450px]">
        <img
          src={img}
          alt="my_work"
          className="max-w-[450px] w-full min-h-[150px] text-white sm:h-72 rounded-3xl"
        />
      </div>
      <div className="text-white flex flex-col items-center lg:items-start">
        <h2 className="text-4xl xl:text-5xl font-semibold">{projectName}</h2>
        <p className="text-2xl 2xl:text-3xl text-[#6a6a69] py-2 font-medium">
          {desc}
        </p>
        {/* tech stack */}
        <div className="pt-1 flex flex-wrap gap-5 justify-center lg:justify-start">
          {techStack.map((item, index) => (
            <TechStack key={index} text={item} />
          ))}
        </div>

        <div className="pt-5 flex gap-x-5">
          <a
            href={viewLive}
            target="_blank"
            rel="noreferrer"
            className="bg-secondaryLight text-2xl text-textColorDark font-semibold px-5 py-3 hover:bg-primary border-[3px] border-secondaryLight hover:border-secondaryLight hover:text-secondaryLight"
          >
            View Live
          </a>
          <a
            href={githubLink}
            className="text-2xl font-semibold px-5 py-3 border-[3px] border-secondaryLight hover:bg-secondaryLight hover:text-textColorDark"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;

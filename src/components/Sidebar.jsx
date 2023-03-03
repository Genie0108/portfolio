import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-sidebar w-full h-28 lg:w-24 lg:h-screen lg:fixed top-0 z-10 flex flex-row lg:flex-col items-center lg:gap-x-10 lg:justify-between relative ">
      <Link to="/">
        <div className="">
          <img
            src={Logo}
            alt="logo"
            className="w-10 lg:mt-8 lg:mx-auto py-1 lg:py-0 sepia"
          />
          <h1 className="text-white font-bold text-xl text-left mt-1">
            Sushant
          </h1>
        </div>
      </Link>
      {/* navbar section */}
      <nav className="md:flex flex-row lg:flex-col items-center md:mx-auto gap-x-10 md:gap-x-20 lg:gap-y-10 hidden">
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
          })}
        >
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
          })}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
          })}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/works"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
          })}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="selected"
          to="/skills"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
          })}
        >
          <FontAwesomeIcon
            icon={faCode}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </NavLink>
      </nav>
      <ul className="hidden md:flex lg:flex-col items-center gap-x-12 lg:gap-y-8 lg:mb-5">
        <li>
          <a
            href="https://www.linkedin.com/in/sushant-dhimal-809456202/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/dhiant" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shant_dhi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
      </ul>
      {/* collapsable button */}
      <div className="absolute top-7 right-8 md:hidden">
        <button onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon
            icon={!toggle ? faBars : faClose}
            className="text-secondary"
            size="3x"
          />
        </button>
      </div>

      {toggle && (
        <div
          className="md:hidden bg-sidebar px-4 w-full h-20 absolute top-28 flex flex-wrap gap-y-10 items-center justify-center menuButtons z-10
        "
        >
          <div className="flex gap-x-16">
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
            >
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
                onClick={() => setToggle(false)}
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
                onClick={() => setToggle(false)}
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
                onClick={() => setToggle(false)}
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/works"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
                onClick={() => setToggle(false)}
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/skills"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
            >
              <FontAwesomeIcon
                icon={faCode}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
                onClick={() => setToggle(false)}
              />
            </NavLink>
          </div>
          {/* social accounts */}
          <ul className="bg-sidebar justify-center w-full flex gap-x-16 pb-5">
            <li>
              <a
                href="https://www.linkedin.com/in/sushant-dhimal-809456202/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dhiant"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shant_dhi/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Sidebar;

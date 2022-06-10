import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-sidebar w-full h-28 lg:w-24 lg:h-full lg:absolute top-0 z-10 flex flex-row lg:flex-col items-center sm:gap-x-10 relative ">
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
      <nav className="lg:mt-72 md:flex flex-row lg:flex-col items-center md:mx-auto gap-x-10 md:gap-x-24 lg:gap-y-10 hidden">
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
        <ul className="flex lg:flex-col items-center gap-x-12 lg:gap-y-8 absolute lg:bottom-16 right-14 lg:right-8">
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
      </nav>
      {/* collapsable button */}
      <div className="absolute top-7 right-8 md:hidden">
        <button onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faBars} className="text-secondary" size="3x" />
        </button>
      </div>
      {toggle && (
        <div
          className="bg-sidebar w-full h-20 absolute top-28 flex items-center gap-14 menuButtons z-10
        "
        >
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
          {/* social accounts */}
          <ul className="flex lg:flex-col items-center gap-x-12 lg:gap-y-8 absolute lg:bottom-16 right-14 lg:right-8">
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

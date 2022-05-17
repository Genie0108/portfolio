import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="bg-sidebar w-24  h-full absolute top-0 z-10 flex flex-col items-center">
      <Link to="/">
        <div className="">
          <img src={Logo} alt="logo" className="w-10 mt-8 mx-auto" />
          <h1 className="text-white font-bold text-xl text-left mt-1">
            Sushant
          </h1>
        </div>
      </Link>
      <nav className="mt-72 flex flex-col gap-8 items-center">
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
        <ul className="flex flex-col gap-4 items-center absolute bottom-16">
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
    </div>
  );
};

export default Sidebar;

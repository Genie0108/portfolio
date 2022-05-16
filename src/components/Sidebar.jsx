import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="bg-sidebar w-24  h-full absolute top-0 z-10 flex flex-col justify-center">
      <nav className="flex flex-col gap-6 items-center">
        <NavLink exact="true" activeClassName="selected" to="/">
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            className="text-icon active:text-secondary"
          />
        </NavLink>
        <NavLink exact="true" activeClassName="selected" to="/about">
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="text-icon active:text-secondary"
          />
        </NavLink>
        <NavLink exact="true" activeClassName="selected" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="text-icon active:text-secondary"
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

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./layout.css";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="absolute w-full h-full">
        {/* <span className="top-16 text-secondary opacity-90 absolute bottom-0 left-7 sm:left-40 text-3xl font-laBelle">
          &lt;body&gt;
        </span> */}
        <Outlet />
        {/* <span className="text-secondary opacity-90 absolute bottom-1 sm:bottom-20 left-7 sm:left-40 text-3xl font-laBelle">
          &lt;/body&gt;
          <br />
          <span className="-ml-6 mt-2">&lt;/html&gt;</span>
        </span> */}
      </div>
    </div>
  );
};

export default Layout;

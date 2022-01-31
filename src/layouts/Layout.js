import React from "react";
import Content from "../components/Content/Content";
import SideBar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="py-2">
      <div className="flex">
        <SideBar />
        <Content children={children} />
      </div>
    </div>
  );
};

export default Layout;

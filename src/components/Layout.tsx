import React from "react";
import {
    Outlet
} from "react-router-dom";
import SideMenu from "./SideMenu";

const Layout:React.FC = () => (
    <div className="app">
        <SideMenu />
        <Outlet />
    </div>
);

export default Layout;

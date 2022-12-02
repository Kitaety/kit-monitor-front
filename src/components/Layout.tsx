import React from "react";
import {
    Outlet,
    useLocation
} from "react-router-dom";
import SideMenu from "./SideMenu";
import { isHideSideMenuRouter } from '../helpers/routers';

const Layout: React.FC = () => {
    const pathname: string = useLocation().pathname;
    const hideSideMenu: boolean = isHideSideMenuRouter(pathname);

    return (
        <div className="app">
            <SideMenu hide={hideSideMenu}/>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

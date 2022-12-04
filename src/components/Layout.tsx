import React from "react";
import {
    Outlet,
    useLocation
} from "react-router-dom";
import SideMenu from "./SideMenu";
import { isHideSideMenuRouter } from '../helpers/routers';
import { Container } from "@mui/material";

const Layout: React.FC = () => {
    const pathname: string = useLocation().pathname;
    const hideSideMenu: boolean = isHideSideMenuRouter(pathname);

    return (
        <div className="wrapper">
            <SideMenu hide={hideSideMenu}/>
            <Container >
                <Outlet />
            </Container>
        </div>
    );
};

export default Layout;

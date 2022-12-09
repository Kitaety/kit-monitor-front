import React from "react";
import {
    Outlet,
    useLocation
} from "react-router-dom";
import { isHideSideMenuRouter } from '../../helpers/routers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./Header";
import { Box, CssBaseline, Toolbar } from '@mui/material';


const Layout: React.FC = () => {
    const pathname: string = useLocation().pathname;
    const hideSideMenu: boolean = isHideSideMenuRouter(pathname);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <Header hideSideMenu={hideSideMenu} />
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <CssBaseline />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default Layout;

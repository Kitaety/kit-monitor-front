import React from "react";
import { Drawer as MuiDrawer, Toolbar, IconButton, Divider, List, styled, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { ChevronLeft, Dashboard } from '@mui/icons-material';
import { sideMenuWidth } from "../../constants/sizes";
import { Link } from 'react-router-dom';
import routersPath from '../../constants/routers';

type ISideMenuProps = {
    open: boolean;
    onClose: () => void;
};

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: sideMenuWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const SideMenu: React.FC<ISideMenuProps> = ({ open, onClose }) => {
    const closeMenu = () => {
        onClose();
    };

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <Box component="span" display="block" width="100%" textAlign="center">
                    KitMonitor
                </Box>
                <IconButton onClick={closeMenu}>
                    <ChevronLeft />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton component={Link} to={routersPath.dashboard}>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
            </List>
        </Drawer>
    );
};

export default SideMenu;


import * as React from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, Badge, Box, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideMenu from '../SideMenu';
import { styled } from '@mui/material/styles';
import { sideMenuWidth } from '../../constants/sizes';

type IHeaderProps = {
    hideSideMenu?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: sideMenuWidth,
        width: `calc(100% - ${sideMenuWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const Header: React.FC<IHeaderProps> = ({hideSideMenu}) => {
    const [isOpenedMenu, changeMenuOpenStatus] = React.useState(false);

    const openMenu = () => {
        changeMenuOpenStatus(true);
    };

    const closeMenu = () => {
        changeMenuOpenStatus(false);
    };

    return (
        <Box>
            <AppBar position="absolute" open={isOpenedMenu}>
                <Toolbar
                    sx={{
                        pr: '24px',
                    }}
                >
                    {!hideSideMenu && <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openMenu}
                        sx={{
                            marginRight: '36px',
                            ...(isOpenedMenu && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {/* TODO: change page title */}
                        Dashboard
                    </Typography>
                    {!hideSideMenu && <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>}
                </Toolbar>
            </AppBar>
            {!hideSideMenu && <SideMenu open={isOpenedMenu} onClose={closeMenu} />}
        </Box>
    );
};

export default Header;

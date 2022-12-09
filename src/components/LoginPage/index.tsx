import * as React from "react";
import { Button, Typography, Container, Box, Avatar, TextField, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import localization from '../../localization/index';
import routersPath from '../../constants/routers';
import { NavigateFunction } from "react-router-dom";

type ILoginPageProps = {
    navigation: NavigateFunction
}
class LoginPage extends React.Component<ILoginPageProps> {
    public onSubmit = () => {
        this.props.navigation(routersPath.dashboard);
    };

    public render(): React.ReactNode {
        return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: (theme) => theme.palette.background.default
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {localization.singIn}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={localization.emailAddress}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={localization.password}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={this.onSubmit}
                        >
                            {localization.singIn}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {localization.forgotPassword}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href={routersPath.registration} variant="body2">
                                    {localization.singUp}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default LoginPage;

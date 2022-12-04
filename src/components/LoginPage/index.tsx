import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import strings from '../../localization/index';

class LoginPage extends React.Component {
    public onClick = () => {
        const isRu:boolean = strings.getLanguage() === 'ru';
        strings.setLanguage(isRu ? 'en' : 'ru');
        this.setState({});
    };

    public render(): React.ReactNode {
        return (
            <Paper>
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    fontWeight="500"
                >
                    {strings.singIn}
                </Typography>
                <Button variant="contained" onClick={this.onClick}>{strings.singIn}</Button>
            </Paper>
        );
    }
}

export default LoginPage;

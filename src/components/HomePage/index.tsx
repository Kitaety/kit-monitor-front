import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import routersPath from '../../constants/routers';

class HomePage extends React.Component {
    public render(): React.ReactNode {
        return (
            <div>
                Home Page
                <BsFillPersonFill/>
                <Link to={routersPath.login}>{routersPath.login}</Link>
                <Link to={routersPath.registration}>{routersPath.registration}</Link>
                <Link to={routersPath.dashboard}>{routersPath.dashboard}</Link>
            </div>
        );
    }
}

export default HomePage;

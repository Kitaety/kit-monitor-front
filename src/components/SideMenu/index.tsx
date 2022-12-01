import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
const SideMenu: React.FC = () => (
    <div className="menu-container">
        <ul className="menu">
            <li className="menu-item">
                <Link to="/login" title="Login" className="link">Login</Link>
            </li>
            <li className="menu-item">
                <Link to="/" title="Home" className="link">Home</Link>
            </li>
        </ul>
        <div className="account-button">
            <div className="icon">
                <BsFillPersonFill />
            </div>
            <div className="text">
                Account
            </div>
        </div>
    </div>
);

export default SideMenu;

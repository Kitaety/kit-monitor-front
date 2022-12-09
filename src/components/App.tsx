import React from 'react';
import {
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import HomePage from './HomePage';
import Layout from './Layout';
import LoginPage from './LoginPage';
import routersPath from '../constants/routers';
import RegistrationPage from './RegistrationPage/index';
import DashboardPage from './DashboardPage/index';
import { NavigateFunction } from 'react-router-dom';

const App: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <Routes>
            <Route path={routersPath.home} element={<Layout />}>
                <Route index element={<HomePage/>}/>
                <Route path={routersPath.login} element={<LoginPage navigation={navigate}/>}/>
                <Route path={routersPath.registration} element={<RegistrationPage/>}/>
                <Route path={routersPath.dashboard} element={<DashboardPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;

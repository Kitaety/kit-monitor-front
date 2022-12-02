import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import HomePage from './HomePage';
import Layout from './Layout';
import LoginPage from './LoginPage';
import routersPath from '../constants/routers';
import RegistrationPage from './RegistrationPage/index';
import DashboardPage from './DashboardPage/index';


function App() {
    return (
        <Routes>
            <Route path={routersPath.home} element={<Layout />}>
                <Route index element={<HomePage/>}/>
                <Route path={routersPath.login} element={<LoginPage/>}/>
                <Route path={routersPath.registration} element={<RegistrationPage/>}/>
                <Route path={routersPath.dashboard} element={<DashboardPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;

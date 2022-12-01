import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import HomePage from './HomePage';
import Layout from './Layout';
import LoginPage from './LoginPage';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route element={<LoginPage/>} path="login"/>
            </Route>
        </Routes>
    );
}

export default App;

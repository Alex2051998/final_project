import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";

import {LoginPage, MainLayout, RegisterPage, OrderListPage} from "./pages";


const App = () => {
    return (
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'login'}/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/orders'} element={<OrderListPage/>}/>
                </Route>

            </Routes>

);
};

export default App;
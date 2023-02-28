import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useSelector} from "react-redux";


const MainLayout = () => {
    const {errors} = useSelector(state => state.auth);

    return (
        <div>
            {/*<Header/>*/}
            <Outlet/>
            <div>
                {errors && <h4>error: {errors.detail}</h4>}
            </div>
        </div>
    );
};

export {MainLayout};
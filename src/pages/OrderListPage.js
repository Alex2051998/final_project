import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {orderActions} from "../redax";
import {Header, Orders} from "../components";

const OrderListPage = () => {
    return (
        <div>
            <Header/>
            <Orders/>
        </div>
    );
};

export {OrderListPage};
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer,orderReducer} from "./slices";

const rootReducer = combineReducers({
    auth:authReducer,
    order:orderReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}
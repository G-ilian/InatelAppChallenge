// Serve para documentar todas as operações feitas com o redux JS
import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer:{
        nav: navReducer
    }
});
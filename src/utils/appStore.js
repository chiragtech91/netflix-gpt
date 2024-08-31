import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer: {
        menuSlice: menuSlice
    }
});

export default store;
import {configureStore} from "@reduxjs/toolkit";
import FieldReducer from "../Reducers/FieldReducer.tsx";

const store = configureStore({
    reducer: {
        fieldManager: FieldReducer,
    }
});

export default store;
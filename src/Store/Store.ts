import {configureStore} from "@reduxjs/toolkit";
import FieldReducer from "../Reducers/FieldReducer.tsx";
import CropReducer from "../Reducers/CropReducer.ts";
import StaffReducer from "../Reducers/StaffReducer.ts";
import VehicleReducer from "../Reducers/VehicleReducer.ts";

const store = configureStore({
    reducer: {
        fieldManager: FieldReducer,
        cropManager: CropReducer,
        staffManager: StaffReducer,
        vehicleManager: VehicleReducer,

    }
});

export default store;
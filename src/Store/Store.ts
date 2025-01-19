import {configureStore} from "@reduxjs/toolkit";
import FieldReducer from "../Reducers/FieldReducer.tsx";
import CropReducer from "../Reducers/CropReducer.ts";
import StaffReducer from "../Reducers/StaffReducer.ts";
import VehicleReducer from "../Reducers/VehicleReducer.ts";
import EquipmentReducer from "../Reducers/EquipmentReducer.ts";

const store = configureStore({
    reducer: {
        fieldManager: FieldReducer,
        cropManager: CropReducer,
        staffManager: StaffReducer,
        vehicleManager: VehicleReducer,
        equipmentManager: EquipmentReducer,
    }
});

export default store;

import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../Model/Vehicle.ts";

export const initialState: Vehicle[] = []

const vehicleSlice = createSlice({
    name:'staffManager',
    initialState,
    reducers:{
        addVehicle(state,action){},
        updateVehicle(state,action){},
        getVehicle(state,action){},
        deleteVehicle(state,action){},
    }
})

export const {addVehicle, updateVehicle, deleteVehicle,getVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;
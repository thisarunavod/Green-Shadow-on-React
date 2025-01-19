
import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../Model/Vehicle.ts";

export const initialState: Vehicle[] = []

const vehicleSlice = createSlice({
    name:'vehicleManager',
    initialState,
    reducers:{
        addVehicle(state,action){
            const index = state.findIndex(vehicle=>vehicle.vehicleCode === action.payload.vehicleCode)
            if (index < 0) {
                state.push(action.payload)
            }
        },
        updateVehicle(state,action){
            const index = state.findIndex(vehicle=>vehicle.vehicleCode === action.payload.vehicleCode)
            if (index > -1){
                state[index] = action.payload
            }
        },
        deleteVehicle(state,action){
            return state.filter(vehicle=>vehicle.vehicleCode !== action.payload)
        },
        getVehicle(state,action){},
    }
})

export const {addVehicle, updateVehicle, deleteVehicle,getVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;
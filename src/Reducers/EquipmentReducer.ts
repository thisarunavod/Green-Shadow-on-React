
import {createSlice} from "@reduxjs/toolkit";
import {Equipment} from "../Model/Equipment.ts";

export const initialState: Equipment[] = []

const equipmentSlice = createSlice({
    name:'equipmentManager',
    initialState,
    reducers:{
        addEquipment(state,action){
            const index = state.findIndex(equipment=>equipment.equipmentId === action.payload.equipmentId)
            if (index < 0) {
                state.push(action.payload)
            }
        },
        updateEquipment(state,action){
            const index = state.findIndex(equipment=>equipment.equipmentId === action.payload.equipmentId)
            if (index > -1){
                state[index] = action.payload
            }
        },
        deleteEquipment(state,action){
            return state.filter(equipment=>equipment.equipmentId !== action.payload)
        },
        getEquipment(state,action){},
    }
})

export const {addEquipment,updateEquipment ,deleteEquipment,getEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;
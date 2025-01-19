import {Staff} from "../Model/Staff.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState: Staff[] = []

const staffSlice = createSlice({
    name:'staffManager',
    initialState,
    reducers:{
        addStaff(state,action){
            const index = state.findIndex(staff=>staff.staffId === action.payload.staffId)
            if (index < 0) {
                state.push(action.payload)
            }
            console.log(state)
        },
        updateStaff(state,action){
            const index = state.findIndex(staff=>staff.staffId === action.payload.staffId)
            if (index > -1){
                state[index] = action.payload
            }
        },
        getStaff(state,action){},
        deleteStaff(state,action){
            return state.filter(staff=> staff.staffId !== action.payload)
        },
    }
})

export const {addStaff, updateStaff, deleteStaff, getStaff} = staffSlice.actions;
export default staffSlice.reducer;
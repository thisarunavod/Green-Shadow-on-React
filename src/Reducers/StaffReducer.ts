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
        updateStaff(state,action){},
        getStaff(state,action){},
        deleteStaff(state,action){},
    }
})

export const {addStaff, updateStaff, deleteStaff, getStaff} = staffSlice.actions;
export default staffSlice.reducer;
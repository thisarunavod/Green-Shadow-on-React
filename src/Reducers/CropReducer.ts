import {Crop} from "../Model/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState:Crop[] = []

const cropSlice = createSlice({
    name:'cropManager',
    initialState,
    reducers:{
        addCrop(state,action){
            const index = state.findIndex(field=>field.fieldCode === action.payload.fieldCode)
            if (index < 0) {
                state.push(action.payload)
            }
        },
        updateCrop(state,action){
            const index = state.findIndex(field=>field.fieldCode === action.payload.fieldCode)
            if (index > -1){
                state[index] = action.payload
            }
        },
        getCrop(state,action){

        },
        deleteCrop(state,action){
            console.log(action.payload)
            return state.filter(field=>field.fieldCode !== action.payload)
        },

    }
})
export const {addCrop,updateCrop,getCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;


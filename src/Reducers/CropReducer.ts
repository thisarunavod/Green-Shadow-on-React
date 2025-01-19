import {Crop} from "../Model/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState:Crop[] = []

const cropSlice = createSlice({
    name:'cropManager',
    initialState,
    reducers:{
        addCrop(state,action){

            const index = state.findIndex(crop=>crop.cropCode === action.payload.cropCode)
            if (index < 0) {
                state.push(action.payload)
            }
            console.log(state)
        },
        updateCrop(state,action){
            const index = state.findIndex(crop=>crop.cropCode === action.payload.cropCode)
            if (index > -1){
                state[index] = action.payload
            }
        },
        getCrop(state,action){

        },
        deleteCrop(state,action){
            return state.filter(crop=> crop.cropCode !== action.payload)
        },

    }
})
export const {addCrop,updateCrop,getCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;


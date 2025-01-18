import {Field} from "../Model/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState:Field[] = []

const fieldSlice = createSlice({
    name:'fieldManager',
    initialState,
    reducers:{
        addField(state,action){
            const index = state.findIndex(field=>field.fieldCode === action.payload.fieldCode)
            if (index < 0) {
                state.push(action.payload)
            }
        },
        updateField(state,action){
            const index = state.findIndex(field=>field.fieldCode === action.payload.fieldCode)
            if (index > -1){
                state[index] = action.payload
            }
        },
        getField(state,action){

        },
        deleteField(state,action){
            console.log(action.payload)
            return state.filter(field=>field.fieldCode !== action.payload)
        },

    }
})
export const {addField,updateField,getField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;


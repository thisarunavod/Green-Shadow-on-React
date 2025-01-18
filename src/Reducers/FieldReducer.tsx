import {Field} from "../Model/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState:Field[] = []

const fieldSlice = createSlice({
    name:'fieldManager',
    initialState,
    reducers:{
        addField(state,action){
            state.push(action.payload)
            console.log(state.length)
        },
        updateField(state,action){

        },
        getField(state,action){

        },
        deleteField(state,action){

        },

    }
})
export const {addField,updateField,getField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;

// export function FieldReducer(state , action) {
//     switch(action.type){
//         case "ADD_FIELD":
//             return [
//                 ...state,action.payload
//             ]
//     }
// }
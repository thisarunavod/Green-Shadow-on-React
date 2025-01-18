import React, {createContext, ReducerWithoutAction, useReducer} from "react";
import {countReducer} from "./CountReducer.tsx";
import {ButtonComponent} from "./CountButton.tsx";

export function CountNumberWithReducer() {

    const [count,dispatch] = useReducer(countReducer,0)

    return (
        <div className={'flex gap-2 justify-center items-center w-[500px] h-[500px] bg-slate-200'}>
            {count}
            <ButtonComponent handleClick={()=>dispatch({type:'INCREASE',payload:1})} name={'INCREASE'}></ButtonComponent>
            <ButtonComponent handleClick={()=>dispatch({type:'DECREASE',payload:1})} name={'DECREASE'}></ButtonComponent>
        </div>
    );

}



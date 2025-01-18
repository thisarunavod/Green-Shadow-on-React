import {createContext, useContext, useReducer, useState} from "react";


const CountContext = createContext({
    handleClick:()=> {},
    name:"INCREMENT"
})

export function NormalCount() {

    const name = 'INCREMENT'

    const [count,dispatch] = useReducer(countReducerSimply,0);

    function handleClick(){
        dispatch({type:'INCREASE',payload:1})
    }
    return (

        <CountContext.Provider value={{handleClick , name}}>
            {count}
            <NormalButtonComponent></NormalButtonComponent>
        </CountContext.Provider>
    );
}


export function NormalButtonComponent() {
    const {handleClick ,name} = useContext(CountContext);
    return (
        <>
            <button className='p-4 bg-violet-300 hover:bg-violet-400'
                onClick={handleClick}
            >{name}</button>
        </>
    );
}

function countReducerSimply(state: number, action: { type: string,payload: number}): number | undefined   {
    switch (action.type) {
        case 'INCREASE':
            return (state+action.payload);
        case 'DECREASE':
            return (state-action.payload)
        default:
            return undefined;
    }
}
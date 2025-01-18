export function countReducer(state:number, action:{type:string,payload:number}) {
    switch (action.type) {
        case 'INCREASE':
            return (state+action.payload);
        case 'DECREASE':
            return (state-action.payload)
    }
}
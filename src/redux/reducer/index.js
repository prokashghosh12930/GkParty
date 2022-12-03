import { INCRIMENT, DECRIMENT } from "../action/ActionType";
const initialState = 16;
export const Reducer =(state = initialState, action)=> {
    switch(action.type){
        case "INCRIMENT":
            return state + 1;
        case "DECRIMENT":
            return state - 1;
        default:
            return state;
    }
}
const initialState = 0;
/**
 * 
 * @param {initate State} state 
 * @param {*decNumber} action 
 * @returns initiger
 * @description
 * they are use to perform redux operation
 */
const changeTheNumber = (state = initialState, action ) =>{
    switch (action.type) {
        case "INCRIMENT": return state + 1;
        case "DECRIMENT": return state - 1;
        default : return state;
    }
}
export default changeTheNumber;
const initialState = 0;

const changeTheNumber = (state = initialState, action ) =>{
    switch (action.type) {
        case "INCRIMENT": return state + 1;
        case "DECRIMENT": return state - 1;
        default : return state;
    }
}
export default changeTheNumber;
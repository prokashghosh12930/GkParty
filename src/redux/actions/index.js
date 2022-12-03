export const incNumber = () => {
    return{
        type: "INCRIMENT"
    } 
}
/**
 * @param decNumber
 * @description
 * this functionis use to call decrise function reducer in react redux
 */
export const decNumber = () => { 
    return{
        type: "DECRIMENT"
    }
}
import { INCRIMENT, DECRIMENT } from "./ActionType"
export const Incriment = (data) => ({
    type: INCRIMENT,
    payload: data,
});
export const Decriment = (data) => ({
    type: DECRIMENT,
    payload: data,
});
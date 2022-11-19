import importState from '../state/index'
import { numData } from '../constants'
export const counter = (state = importState, action: any) => {
    switch (action.type) {
        case numData.ADD:
            return state.numData = action.payload;
        default:
            return state;
    }
}
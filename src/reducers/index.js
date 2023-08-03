import CONSTANTS from "../constants";
const { ACTIONS } = CONSTANTS

export function reducer(state,action) {
    switch(action.type) {
        case ACTIONS.INPUT_CHANGE: {
            const {name, value} = action.payload
            return {
                ...state,
                [name]: 
                value
            }
        }
        default: {
            return state
        }

    }
}
import {PLACE_ORDER_FAILURE, PLACE_ORDER_SUCCESS} from "./order.types";

const initState = {
    successMessage : null,
    errorMessage: null
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case PLACE_ORDER_SUCCESS:
            return  {
                ...state, successMessage: action.message, errorMessage: null
            };
        case PLACE_ORDER_FAILURE:
            return  {
                ...state, successMessage: null, errorMessage: action.message
            };
        default:
            return state;
    }
};

export default orderReducer;

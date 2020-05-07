import {FETCH_MENU_FAILURE, FETCH_MENU_SUCCESS} from "./home.types";

const initState = {
    menu : [],
    isLoading : true,
    errorMessage : null
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_MENU_SUCCESS:
            return { ...state, isLoading: false, menu: action.data, errorMessage: null };
        case FETCH_MENU_FAILURE:
            return { ...state, isLoading: false, errorMessage: action.message };
        default:
            return state;
    }
};

export default homeReducer;

import API from '../../config/API';
import {GET_ALL_MENU} from "../../config/apiUrls";
import {FETCH_MENU_FAILURE, FETCH_MENU_SUCCESS} from "./home.types";

export const fetchMenu = () => {
    return async (dispatch) => {
        try {
            const response = await API.get(GET_ALL_MENU);
            const data = response.data.data;

            dispatch({ type: FETCH_MENU_SUCCESS, data: data });
        }catch (e) {
            dispatch({ type: FETCH_MENU_FAILURE, message: e.message });
        }
    }
};

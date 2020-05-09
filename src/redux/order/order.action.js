import {PLACE_ORDER_FAILURE, PLACE_ORDER_SUCCESS} from "./order.types";
import API from "../../config/API";
import {POST_ORDER} from "../../config/apiUrls";
import {CLEAR_CART_ITEMS} from "../cart/cart.types";

export const placeOrder = (order) => {
    return async (dispatch, getState) => {
        try {
            const cartItems = getState().cart.items;

            const products = {};
            cartItems.forEach(item => ( products[item.id] = item.quantity ));

            const body = {
                name: order.name,
                address: order.address,
                products
            };

            const response = await API.post(POST_ORDER, body);

            dispatch({
                type: PLACE_ORDER_SUCCESS, message: response.data.message
            });

            dispatch({ type: CLEAR_CART_ITEMS });
        }catch (e) {
            dispatch({ type: PLACE_ORDER_FAILURE, message: e.message });
        }
    }
};

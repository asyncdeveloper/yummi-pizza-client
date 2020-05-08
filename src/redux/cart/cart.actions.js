import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart.types";


export const addItemToCart = menuId => {
    return async (dispatch, getState) => {
        const menus = getState().home.menu;
        const item = menus.find(menu => menu.id === menuId);
        dispatch({
            type: ADD_TO_CART, data: item
        });
    }
};

export const removeItemFromCart = menuId => {
    return async (dispatch, getState) => {
        const menus = getState().home.menu;
        const item = menus.find(menu => menu.id === menuId);
        dispatch({
            type: REMOVE_FROM_CART, data: item
        });
    }
};

import {ADD_TO_CART, INCREASE_CART_ITEM_QUANTITY, REDUCE_CART_ITEM_QUANTITY, REMOVE_FROM_CART} from "./cart.types";


export const addItemToCart = menuId => {
    return async (dispatch, getState) => {
        const menus = getState().home.menu;
        const item = menus.find(menu => menu.id === menuId);
        item.quantity = 1;
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

export const increaseItemQuantity = menuId => {
    return async (dispatch, getState) => {
        const cartItems = getState().cart.items;

        cartItems.forEach(function (menu) {
            if (menu.id === menuId)
                menu.quantity++;
        });

        dispatch({
            type: INCREASE_CART_ITEM_QUANTITY, data: cartItems
        });
    }
};

export const reduceItemQuantity = menuId => {
    return async (dispatch, getState) => {
        const cartItems = getState().cart.items;

        cartItems.forEach(function (menu) {
            if(menu.quantity > 1) {
                if (menu.id === menuId)
                    menu.quantity--;
            }
        });

        dispatch({
            type: REDUCE_CART_ITEM_QUANTITY, data: cartItems
        });
    }
};

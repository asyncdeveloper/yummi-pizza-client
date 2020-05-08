import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart.types";

const initState = {
    items : [],
    inCart: []
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [ ...state.items, action.data ],
                inCart: [...state.inCart , action.data.id ]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.data.id) ],
                inCart: [ ...state.inCart.filter(cartId => cartId !== action.data.id)  ]
            };
        default:
            return state;
    }
};

export default cartReducer;

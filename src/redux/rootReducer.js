import {combineReducers} from 'redux'
import homeReducer from "./home/home.reducer";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./order/order.reducer";

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
    order: orderReducer
});

export default rootReducer;

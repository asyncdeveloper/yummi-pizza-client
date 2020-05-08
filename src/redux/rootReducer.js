import {combineReducers} from 'redux'
import homeReducer from "./home/home.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer
});

export default rootReducer;

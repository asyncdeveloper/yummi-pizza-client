// Layout Types
import DefaultLayout from "./layouts/Default";
// Route Views
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import OrderPage from "./components/OrderPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage,
    alias : "Home",
    showInNav: true
  },
  {
    path: "/cart",
    exact: true,
    layout: DefaultLayout,
    component: CartPage,
    alias : "Cart",
    showInNav: true
  },
  {
    path: "/order",
    exact: true,
    layout: DefaultLayout,
    component: OrderPage,
    alias : "Order",
    showInNav: false
  },
];

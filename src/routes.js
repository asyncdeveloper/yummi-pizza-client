// Layout Types
import DefaultLayout from "./layouts/Default";
// Route Views
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage,
    alias : "Home"
  },
  {
    path: "/cart",
    exact: true,
    layout: DefaultLayout,
    component: CartPage,
    alias : "Cart"
  },
];

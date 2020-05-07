// Layout Types
import DefaultLayout from "./layouts/Default";
// Route Views
import HomePage from "./components/HomePage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage,
    alias : "Home"
  },
];

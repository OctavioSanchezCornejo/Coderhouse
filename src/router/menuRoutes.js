import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "category",
        path: "/category/:generoName",
        Element: ItemListContainer,
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer,
    },
    {
        id: "dashboard",
        path: "/dashboard",
        Element: Dashboard,
    },

];
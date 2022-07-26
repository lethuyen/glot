import Home from "../Pages/Home";
import News from "../Pages/News";
import Products from "../Pages/Products";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/products', component: Products }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
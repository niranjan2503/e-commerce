import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";

export const routes = [
    {
        path: "/",
        component: Home,
        canAuthenticate: true,
    },
    // {
    //     path: "/home",
    //     component: Home,
    //     canAuthenticate: true,
    // },
    {
        path: "/login",
        component: Login,
        canAuthenticate: false,
    },
];

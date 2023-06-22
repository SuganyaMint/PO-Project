
import AddDataComponent from "../components/AddDataComponent";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotfoundPage from "../pages/NotfoundPage";

export const RouterModel = [
    {
        id: 0,
        routerName: "NotFound",
        routerPath: "*",
        routerComponent: <NotfoundPage/>
    },
    {
        id: 1,
        routerName: "Home",
        routerPath: "/",
        routerComponent: <HomePage/>
    },
    {
        id: 2,
        routerName: "Login",
        routerPath: "/login",
        routerComponent: <LoginPage/>
    },
    {
        id: 3,
        routerName: "AddData",
        routerPath: "/adddata",
        routerComponent: <AddDataComponent/>

    }
]
import { Outlet } from "react-router-dom";
import { NoPermision } from "../page/err/401";

export const Middleware = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    if(!user){
        return <NoPermision/>
    }
    return <Outlet/>
}
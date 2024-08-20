
import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseStatehook } from "../hooks/UseStatehook";
import { Calculatore } from "../hooks/Calculatore";
import { UseEffectHook } from "../hooks/UseEffecthook";
import { Register } from "../pages/Register";



let allpages={
    path:'/',
    element:<><Outlet/></>,
    children:[
    {
        path:'home',
        element:<Home/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'hook',
        element:<UseEffectHook/>
    },
    {
        path:'register',
        element:<Register/>
    }

     ]
}




function Allroutes(){
    return useRoutes([allpages])
}
export default Allroutes
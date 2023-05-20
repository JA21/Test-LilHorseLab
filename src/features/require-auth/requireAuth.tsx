import { useLocation,Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentToken } from "../auth-slice.tsx/authSlice";

import Header from "../../components/Header/header";
const RequiredAuth=()=>{
    const token=useSelector(selectCurrentToken);
    const location= useLocation();
    console.log(token)
    return(
        token?
        <div>
            <Header/>
            <Outlet/>
        </div>
        :
        <Navigate to={'/login'} state={{from:location}} replace/>
    )
}

export default RequiredAuth;
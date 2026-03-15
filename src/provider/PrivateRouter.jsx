import React, { use, useContext} from "react"
import { Navigate, useLocation } from "react-router"
import { AuthContext } from "../provider/AuthProvider"


const PrivateRouter = ({ children }) => {

const  {user, loading} = useContext(AuthContext)
const location = useLocation()
if(loading){
    return <span className="loading loading-spinner loading-lg"> </span>
}
if(!user){
    return <Navigate to='/login' state={location.pathname}></Navigate>
}
return children
}

export default PrivateRouter;
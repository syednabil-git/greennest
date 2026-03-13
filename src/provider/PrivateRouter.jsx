import React, { use} from "react"
import { Navigate, useLocation } from "react-router"
import { AuthContext } from "../provider/AuthProvider"


const PrivateRouter = ({ children }) => {

const { user } = use (AuthContext)
const location = useLocation()

if(!user){
return <Navigate state={location.pathname} to="/login"/>
}

return children
}

export default PrivateRouter;
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import AuthLayout from "../Layouts/AuthLayout";
import Plants from "../pages/Plants";
import PlantDetails from "../pages/PlantDetails"
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import PrivateRouter from "../provider/PrivateRouter";

const router = createBrowserRouter([

{
path:"/",
element:<AuthLayout/>,
loader: () => fetch("plants.json"),
children:[

{
path:"/",
element:<Home/>
},


{
path:"/login",
element:<Login/>
},

{
path:"/signup",
element:<SignUp/>
},

{
path:"/profile",
element:<Profile/>
},
{
path:"/plants",
element:<Plants/>
},
{
path:"/plant/:id",
element:(
    <PrivateRouter>
        <PlantDetails></PlantDetails>
    </PrivateRouter>
    ),
    loader: () => fetch("plants.json")


}


]

}

]);


export default router;
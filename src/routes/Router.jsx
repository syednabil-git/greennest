import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AuthLayout from "../Layouts/AuthLayout";
import Plants from "../pages/Plants";
import PlantDetails from "../pages/PlantDetails"
import Profile from "../pages/Profile";





const router = createBrowserRouter([

{
path:"/",
element:<AuthLayout/>,

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
path:"/register",
element:<Register/>
},

{
path:"/profile",
element:<Profile/>
},
{
path:"/plant",
element:<Plants/>
},
{
path:"/plant/:id",
element:<PlantDetails/>,
loader:()=>fetch("/plants.json")
}


]

}

]);


export default router;
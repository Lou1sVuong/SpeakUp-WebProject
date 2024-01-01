import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"


const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Login",
        component: Login,
    },
    
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes}
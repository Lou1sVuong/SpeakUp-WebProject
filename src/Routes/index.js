import BlankLayout from "../Layout/BlankLayout"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Home from "../Pages/Home/Home"
import ConfirmNewPass from "../Pages/LoginAndRegister/ConfirmNewPass"
import Login from "../Pages/LoginAndRegister/Login"
import ResetPass from "../Pages/LoginAndRegister/ResetPass"
import SignUp from "../Pages/LoginAndRegister/SignUp"

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Login",
        component: Login,
        layout : BlankLayout
    },
    {
        path: "/ResetPassword",
        component: ResetPass,
        layout : BlankLayout
    },
    {
        path: "/ConfirmResetPassword",
        component: ConfirmNewPass,
        layout : BlankLayout
    },
    {
        path: "/SignUp",
        component: SignUp,
        layout : BlankLayout
    },
    {
        path: "/Contact",
        component: Contact,
    },
    {
        path: "/About",
        component: About,
    },
    
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes}
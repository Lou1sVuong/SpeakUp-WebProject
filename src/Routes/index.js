import BlankLayout from "../Layout/BlankLayout"
import ProfileLayout from "../Layout/ProfileLayout"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Courses from "../Pages/Courses/Courses"
import Home from "../Pages/Home/Home"
import ConfirmNewPass from "../Pages/LoginAndRegister/ConfirmNewPass"
import Login from "../Pages/LoginAndRegister/Login"
import ResetPass from "../Pages/LoginAndRegister/ResetPass"
import SignUp from "../Pages/LoginAndRegister/SignUp"
import MyCourses from "../Pages/User/MyCourses/MyCourse"
import MyProfile from "../Pages/User/MyProfile/MyProfile"
import Setting from "../Pages/User/Setting/Setting"


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
        path: "/Courses",
        component: Courses,
    },
    {
        path: "/Contact",
        component: Contact,
    },
    {
        path: "/About",
        component: About,
    },
    {
        path: "/User/MyProfile",
        component: MyProfile,
        layout : ProfileLayout
    },
    {
        path: "/User/MyCourses",
        component: MyCourses,
        layout : ProfileLayout
    },
    {
        path: "/User/Setting",
        component: Setting,
        layout : ProfileLayout
    },
]
const privateRoutes = [
    

]
export { publicRoutes, privateRoutes}
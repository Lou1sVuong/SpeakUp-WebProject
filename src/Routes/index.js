import Home from "../Pages/Home/Home"
import Testpage from "../Pages/TestPage/Testpage"


const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/testpage",
        component: Testpage,
    }
]
const privateRoutes = [

]

export { publicRoutes, privateRoutes}
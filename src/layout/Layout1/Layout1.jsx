import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const Layout1 = () => {
    return (
        <>
        <Navbar/>
            <Outlet/>
        {/* footer homepage  */}
        </>
    )
}
export default Layout1
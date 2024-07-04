import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import './Layout1.scss'

const Layout1 = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <Outlet />
            </main>
            {/* footer homepage  */}
        </>
    )
}
export default Layout1
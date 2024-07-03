import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const Layout3 = () => {
    return (
        <div>
            <Navbar/>


            <main>
                <Outlet/>
            </main>

            {/* footer usuario */}
        </div>
    )
}
export default Layout3
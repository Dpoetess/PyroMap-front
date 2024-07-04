import { Outlet } from "react-router-dom"
import UserNavBar from "../../components/UserNavBar/UserNavBar"

const Layout3 = () => {
    return (
        <div>
            <UserNavBar />

            <main>
                <Outlet/>
            </main>

            {/* footer usuario */}
        </div>
    )
}
export default Layout3
import { Outlet } from "react-router-dom"
import NavBarList from "../../components/NavBarList/NavBarList"

const Layout3 = () => {
    return (
        <div>
            <NavBarList/>

            <main>
                <Outlet/>
            </main>

            {/* footer usuario */}
        </div>
    )
}
export default Layout3
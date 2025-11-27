



import { Outlet } from 'react-router-dom';
import MiniDrawer from '../Components/Drawer'

export default function Layout() {
    return (
    <MiniDrawer >
        <Outlet/>
    </MiniDrawer>
    )
}

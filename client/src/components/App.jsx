import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
function App() {
    return(
        <>
        <Navbar />
        <h1>Vector NYC</h1>
        <Outlet />
        </>
    )
}
export default App
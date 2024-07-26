import { NavLink } from "react-router-dom"
function Navbar (){
    return(
        <div id="nav-bar-container">
            <div className="nav-bar">
                <NavLink to="/" >Forms</NavLink>

                <NavLink to="/history" >History</NavLink>
            </div>
        </div>
        
    )
}
export default Navbar
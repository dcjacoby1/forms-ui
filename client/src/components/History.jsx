import { Outlet, Link } from "react-router-dom"
function History(){
    return(
        <div id="forms-container">
            <div id="forms">
                <Link to="tr-info">Tenant Receipts</Link>
                <Link to="ti-info">Tenant Info</Link>
            </div>
                <Outlet />
            
        </div>
    )
}
export default History
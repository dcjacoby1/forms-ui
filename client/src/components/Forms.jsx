import { Outlet, Link } from "react-router-dom"

function Forms(){
    return(
        <div id="forms-container">
            <div id="forms">
                <Link to="tenant-receipts">Tenant Receipts</Link>
                <Link to="tenant-info-form">Tenant Info</Link>
            </div>
                <Outlet />
            
        </div>

    )
}
export default Forms
function TR({ address, amount, created_at, item, subtotal }){
    const formattedDate = new Date(created_at).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',

    })
    return(
        <div id="container">
        <div className="order-tile">
            <div>
                <h3>Created At:</h3> 
                <p>{formattedDate} (EST)</p>
            </div>
            <div>
                <h3>Address:</h3> 
                <p>{address}</p>
            </div>
            <div>
                <h3>Amount:</h3> 
                <p>{amount}</p>
            </div>
            <div>
                <h3>Subtotoal:</h3> 
                <p>{subtotal}</p>
            </div>
        </div>
        </div>
    )
}
export default TR
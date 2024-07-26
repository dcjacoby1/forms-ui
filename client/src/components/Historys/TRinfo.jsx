import { useEffect, useState } from "react"
import TR from "./TR"
function TRinfo(){
    const [formList, setFormList] = useState([])
    useEffect(() => {
        fetch('/tenant_receipts')
        .then(response => response.json())
        .then(formList => setFormList(formList))
        .then(console.log(formList))
    }, [])
    const mappedForms = formList.map(form =>
        <TR
        key={form.id}
        address={form.address}
        amount={form.amount}
        created_at={form.created_at}
        item={form.item}
        subtotal={form.subtotal}
        />
    )
    return(
        <div>
        {mappedForms}
        </div>
    )
    }
    export default TRinfo
import { Container } from '@mui/material'
import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function TenantReceipts() {
    const validationSchema = yup.object().shape({
        address: yup.string().required('Address is required'),
        item: yup.number().typeError('Item must be a number').integer('Item must be an integer').required('Item is required'),
        amount: yup.number().typeError('Amount must be a number').required('Amount is required').test('format', 'Amount must be a valid dollar amount', value => /^(\d+(\.\d{1,2})?)?$/.test(value)),
        subtotal: yup.string().typeError('Amount must be a number').required('Subtotal is required').test('format', 'Amount must be a valid dollar amount', value => /^(\d+(\.\d{1,2})?)?$/.test(value)),
    })
    //date has to send from datetime
    const initialValues = {
        address: '',
        item: '',
        amount: '',
        subtotal: ''
    }

    function handleSubmit(values) {
        console.log(values)
    }

    return(
        <div>
        <h1 style={{ textAlign: 'center' }}>Tenant Receipts Form</h1>
        <div id="tenant-form">
            <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ handleSubmit, values, handleChange }) => (
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='address'>Address:</label>
                    <Field
                        id="address"
                        name="address"
                        type='address'
                        placeholder="address"
                        required
                        value={values.address}
                        onChange={handleChange}
                    />

                    <ErrorMessage name="address" component="div" className="error"/>
                    

                    <label htmlFor='item'>Item:</label>
                    <Field
                        id='item'
                        name='item'
                        type='item'
                        placeholder='item'
                        required
                        value={values.item}
                        onChange={handleChange}
                    />

                    <ErrorMessage name="item" component="div" className="error"/>

                    <label htmlFor='amount'>Amount:</label>
                    <Field
                        id='amount'
                        name='amount'
                        type='amount'
                        placeholder='amount'
                        required
                        value={values.amount}
                        onChange={handleChange}
                    />

                    <ErrorMessage name="amount" component="div" className="error"/>

                    <label htmlFor='subtotal'>Subtotal:</label>
                    <Field
                        id='subtotal'
                        name='subtotal'
                        type='subtotal'
                        placeholder='subtotal'
                        required
                        value={values.subtotal}
                        onChange={handleChange}
                    />

                    <ErrorMessage name="subtotal" component="div" className="error"/>

                    

                    
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            )}
            </Formik>
            </Container>
            </div>
        </div>
    )
}
export default TenantReceipts
import { Container } from '@mui/material'
import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function TenantInfoForm() {
    const validationSchema = yup.object().shape({
        address: yup.string()
            .required('Address is required'),
        apartment: yup.string()
            .required('Apartment is required'),
        t1Name: yup.string()
            .required('Tenant 1 Name is required'),
        t1DOB: yup.date()
            .required('Tenant 1 Date of Birth is required'),
        t1cellNumber: yup.string()
            .required('Tenant 1 Cell Number is required'),
        t1email: yup.string()
            .email('Invalid email address')
            .required('Tenant 1 Email is required'),
        emergencyName: yup.string()
            .required('Emergency Contact Name is required'),
        emergencyPhone: yup.string()
            .required('Emergency Contact Phone is required'),
        emergencyAddress: yup.string()
            .required('Emergency Contact Address is required'),
        t1signature: yup.string()
            .required('Tenant 1 Signature is required'),
    });

    const initialValues = {
        address: '',
        apartment: '',
        t1Name: '',
        t1DOB: '',
        t1cellNumber: '',
        t1email: '',
        t1employer: '',
        t1workAddress: '',
        t1workNumber: '',
        t2Name: '',
        t2DOB: '',
        t2cellNumber: '',
        t2email: '',
        t2employer: '',
        t2workAddress: '',
        t2workNumber: '',
        o1name: '',
        o1age: '',
        o2name: '',
        o2age: '',
        o3name: '',
        o3age: '',
        o4name: '',
        o4age: '',
        o5name: '',
        o5age: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyAddress: '',
        t1signature: '',
        t2signature: ''
    }

    function handleSubmit(values, {resetForm}) {
        fetch('/tenant_infos', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                address: values.address,
                apartment: values.apartment,
                t1Name: values.t1Name,
                t1DOB: values.t1DOB,
                t1cellNumber: parseInt(values.t1cellNumber, 10),
                t1email: values.t1email,
                t1employer: values.t1employer,
                t1workAddress: values.workAddress,
                t1workNumber: parseInt(values.t1workNumber, 10),
                t2Name: values.t2Name,
                t2DOB: values.t2DOB,
                t2cellNumber: parseInt(values.t2cellNumber, 10),
                t2email: values.t2email,
                t2employer: values.t2employer,
                t2workAddress: values.t2workAddress,
                t2workNumber: parseInt(values.t2workNumber, 10),
                o1name: values.o1name,
                o1age: parseInt(values.o1age, 10),
                o2name: values.o2name,
                o2age: parseInt(values.o2age, 10),
                o3name: values.o3name,
                o3age: parseInt(values.o3age, 10),
                o4name: values.o4name,
                o4age: parseInt(values.o4age, 10),
                o5name: values.o5name,
                o5age: parseInt(values.o5age, 10),
                emergencyName: values.emergencyName,
                emergencyPhone: parseInt(values.emergencyPhone, 10),
                emergencyAddress: values.emergencyAddress,
                t1signature: values.t1signature,
                t2signature: values.t2signature
            
            })
        }).then(response => {
            if (response.ok) {
                resetForm()
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Tenant Info Form</h1>
        <div id="login-signup-container">
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, values, handleChange }) => (
                        <form className='form' onSubmit={handleSubmit}>
                            <label htmlFor='address'>Address *</label>
                            <Field
                                id="address"
                                name="address"
                                type='text'
                                placeholder="address"
                                value={values.address}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="address" component="div" className="error"/>

                            <label htmlFor='apartment'>Apartment *</label>
                            <Field
                                id='apartment'
                                name='apartment'
                                type='text'
                                placeholder='apartment'
                                value={values.apartment}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="apartment" component="div" className="error"/>

                            <label htmlFor='t1Name'>Tenant 1 Name *</label>
                            <Field
                                id='t1Name'
                                name='t1Name'
                                type='text'
                                placeholder='Tenant 1 Name'
                                value={values.t1Name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1Name" component="div" className="error"/>

                            <label htmlFor='t1DOB'>Tenant 1 Date of Birth *</label>
                            <Field
                                id='t1DOB'
                                name='t1DOB'
                                type='date'
                                placeholder='Tenant 1 Date of Birth'
                                value={values.t1DOB}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1DOB" component="div" className="error"/>

                            <label htmlFor='t1cellNumber'>Tenant 1 Cell Number *</label>
                            <Field
                                id='t1cellNumber'
                                name='t1cellNumber'
                                type='number'
                                placeholder='Tenant 1 Cell Number'
                                value={values.t1cellNumber}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1cellNumber" component="div" className="error"/>

                            <label htmlFor='t1email'>Tenant 1 Email *</label>
                            <Field
                                id='t1email'
                                name='t1email'
                                type='email'
                                placeholder='Tenant 1 Email'
                                value={values.t1email}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1email" component="div" className="error"/>

                            <label htmlFor='t1employer'>Tenant 1 Employer</label>
                            <Field
                                id='t1employer'
                                name='t1employer'
                                type='text'
                                placeholder='Tenant 1 Employer'
                                value={values.t1employer}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1employer" component="div" className="error"/>

                            <label htmlFor='t1workAddress'>Tenant 1 Work Address</label>
                            <Field
                                id='t1workAddress'
                                name='t1workAddress'
                                type='text'
                                placeholder='Tenant 1 Work Address'
                                value={values.t1workAddress}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1workAddress" component="div" className="error"/>

                            <label htmlFor='t1workNumber'>Tenant 1 Work Number</label>
                            <Field
                                id='t1workNumber'
                                name='t1workNumber'
                                type='number'
                                placeholder='Tenant 1 Work Number'
                                value={values.t1workNumber}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1workNumber" component="div" className="error"/>

                            <label htmlFor='t2Name'>Tenant 2 Name</label>
                            <Field
                                id='t2Name'
                                name='t2Name'
                                type='text'
                                placeholder='Tenant 2 Name'
                                value={values.t2Name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2Name" component="div" className="error"/>

                            <label htmlFor='t2DOB'>Tenant 2 Date of Birth</label>
                            <Field
                                id='t2DOB'
                                name='t2DOB'
                                type='date'
                                placeholder='Tenant 2 Date of Birth'
                                value={values.t2DOB}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2DOB" component="div" className="error"/>

                            <label htmlFor='t2cellNumber'>Tenant 2 Cell Number</label>
                            <Field
                                id='t2cellNumber'
                                name='t2cellNumber'
                                type='number'
                                placeholder='Tenant 2 Cell Number'
                                value={values.t2cellNumber}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2cellNumber" component="div" className="error"/>

                            <label htmlFor='t2email'>Tenant 2 Email</label>
                            <Field
                                id='t2email'
                                name='t2email'
                                type='email'
                                placeholder='Tenant 2 Email'
                                value={values.t2email}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2email" component="div" className="error"/>

                            <label htmlFor='t2employer'>Tenant 2 Employer</label>
                            <Field
                                id='t2employer'
                                name='t2employer'
                                type='text'
                                placeholder='Tenant 2 Employer'
                                value={values.t2employer}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2employer" component="div" className="error"/>

                            <label htmlFor='t2workAddress'>Tenant 2 Work Address</label>
                            <Field
                                id='t2workAddress'
                                name='t2workAddress'
                                type='text'
                                placeholder='Tenant 2 Work Address'
                                value={values.t2workAddress}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2workAddress" component="div" className="error"/>

                            <label htmlFor='t2workNumber'>Tenant 2 Work Number</label>
                            <Field
                                id='t2workNumber'
                                name='t2workNumber'
                                type='number'
                                placeholder='Tenant 2 Work Number'
                                value={values.t2workNumber}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2workNumber" component="div" className="error"/>

                            <label htmlFor='o1name'>Occupant 1 Name</label>
                            <Field
                                id='o1name'
                                name='o1name'
                                type='text'
                                placeholder='Occupant 1 Name'
                                value={values.o1name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o1name" component="div" className="error"/>

                            <label htmlFor='o1age'>Occupant 1 Age</label>
                            <Field
                                id='o1age'
                                name='o1age'
                                type='number'
                                placeholder='Occupant 1 Age'
                                value={values.o1age}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o1age" component="div" className="error"/>

                            <label htmlFor='o2name'>Occupant 2 Name</label>
                            <Field
                                id='o2name'
                                name='o2name'
                                type='text'
                                placeholder='Occupant 2 Name'
                                value={values.o2name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o2name" component="div" className="error"/>

                            <label htmlFor='o2age'>Occupant 2 Age</label>
                            <Field
                                id='o2age'
                                name='o2age'
                                type='number'
                                placeholder='Occupant 2 Age'
                                value={values.o2age}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o2age" component="div" className="error"/>

                            <label htmlFor='o3name'>Occupant 3 Name</label>
                            <Field
                                id='o3name'
                                name='o3name'
                                type='text'
                                placeholder='Occupant 3 Name'
                                value={values.o3name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o3name" component="div" className="error"/>

                            <label htmlFor='o3age'>Occupant 3 Age</label>
                            <Field
                                id='o3age'
                                name='o3age'
                                type='number'
                                placeholder='Occupant 3 Age'
                                value={values.o3age}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o3age" component="div" className="error"/>

                            <label htmlFor='o4name'>Occupant 4 Name</label>
                            <Field
                                id='o4name'
                                name='o4name'
                                type='text'
                                placeholder='Occupant 4 Name'
                                value={values.o4name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o4name" component="div" className="error"/>

                            <label htmlFor='o4age'>Occupant 4 Age</label>
                            <Field
                                id='o4age'
                                name='o4age'
                                type='number'
                                placeholder='Occupant 4 Age'
                                value={values.o4age}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o4age" component="div" className="error"/>

                            <label htmlFor='o5name'>Occupant 5 Name</label>
                            <Field
                                id='o5name'
                                name='o5name'
                                type='text'
                                placeholder='Occupant 5 Name'
                                value={values.o5name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o5name" component="div" className="error"/>

                            <label htmlFor='o5age'>Occupant 5 Age</label>
                            <Field
                                id='o5age'
                                name='o5age'
                                type='number'
                                placeholder='Occupant 5 Age'
                                value={values.o5age}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="o5age" component="div" className="error"/>

                            <label htmlFor='emergencyName'>Emergency Contact Name *</label>
                            <Field
                                id='emergencyName'
                                name='emergencyName'
                                type='text'
                                placeholder='Emergency Contact Name'
                                value={values.emergencyName}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="emergencyName" component="div" className="error"/>

                            <label htmlFor='emergencyPhone'>Emergency Contact Phone *</label>
                            <Field
                                id='emergencyPhone'
                                name='emergencyPhone'
                                type='number'
                                placeholder='Emergency Contact Phone'
                                value={values.emergencyPhone}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="emergencyPhone" component="div" className="error"/>

                            <label htmlFor='emergencyAddress'>Emergency Contact Address *</label>
                            <Field
                                id='emergencyAddress'
                                name='emergencyAddress'
                                type='text'
                                placeholder='Emergency Contact Address'
                                value={values.emergencyAddress}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="emergencyAddress" component="div" className="error"/>

                            <label htmlFor='t1signature'>Tenant 1 Signature *</label>
                            <Field
                                id='t1signature'
                                name='t1signature'
                                type='text'
                                placeholder='Tenant 1 Signature'
                                value={values.t1signature}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t1signature" component="div" className="error"/>

                            <label htmlFor='t2signature'>Tenant 2 Signature</label>
                            <Field
                                id='t2signature'
                                name='t2signature'
                                type='text'
                                placeholder='Tenant 2 Signature'
                                value={values.t2signature}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="t2signature" component="div" className="error"/>

                            <button type="submit" className='button'>Submit</button>
                        </form>
                    )}
                </Formik>
            </Container>
        </div>
        </div>
    )
}

export default TenantInfoForm

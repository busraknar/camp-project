import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from 'yup'
import KodlamaioTextInput from '../utilities/customFormControls/KodlamaioTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues} validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form className='ui form'>
                    <KodlamaioTextInput name="productName" placeholder="Ürün adı"/>
                    <KodlamaioTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
                  
                    {/* <FormField>
                        <Field name="productName" placeholder="Ürün adı"></Field>
                        { <label>Ürün adı:</label>
                    <input value="productName" name="productName" placeholder='Product Name'/> }
                        <ErrorMessage name="productName" render={error =>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>

                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
                        <ErrorMessage name="unitPrice" render={error =>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}

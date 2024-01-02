import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function KodlamaioTextInput({...props}) {
    //console.log(props);
    const[field, meta]= useField(props)
    console.log(field);
  return (
    <div>
        <FormField error={meta.touched && !!meta.error}>  /
            <input {...field} {...props} />

            {meta.touched && !!meta.error ? (

              <Label  pointing basic color='green' content={meta.error}></Label>
            ): null}
        </FormField>

    </div>
  )
}

import './input.scss'
import {TextField} from '@mui/material'
import React, {useState} from 'react'
interface iProps {name:string,validator:Function
    ,label:string,type:'number'|'text'|'email',formFields:any,setFormField:Function}
export const Input =({name,validator,label,type,formFields,setFormField}:iProps) =>{
const [err,setErr] =useState(formFields[`${name}Error`])

const handleChange =(e:React.ChangeEvent) =>{
let input = e.currentTarget as HTMLInputElement
setErr(Boolean(validator(input.value)))
setFormField(input.name,input.value,false)
}
    return (
        <TextField
        label={label}
        error={formFields[`${name}Error`] || err}
        onChange={(e:React.ChangeEvent)=>handleChange(e)}
        value={formFields[name]}
        helperText={err ?
                        formFields[`${name}Error`]? 
                        'this field is required':validator(formFields[name]):''}
        name={name}
        className="inputField"
        type={type}
        />
    )
}
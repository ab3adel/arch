import './textfield.scss'
import {TextareaAutosize} from '@mui/material'
import React, {useState} from 'react'
interface iProps {label:string,name:string,formFields:any,setFormField:Function}
export const TextArea =({label,name,formFields,setFormField}:iProps) =>{
const [val,setVal] =useState('')
const handleChange = (e:React.ChangeEvent) =>{

    let input = e.target as HTMLInputElement
    setFormField('Message',input.value,false)
}
    return (
        <textarea
        onChange={(e:React.ChangeEvent)=>handleChange(e)}
        value={formFields[name]}
        className='textArea'
        aria-label={label}
        placeholder={label}
        style={{border:formFields[`${name}Error`]?'1px solid red':''}}
        >

        </textarea>
         
    )
}

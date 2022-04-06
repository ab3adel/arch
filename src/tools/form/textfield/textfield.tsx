import './textfield.scss'
import {TextareaAutosize} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
interface iProps {label:string,name:string,formFields:any,setFormField:Function}
export const TextArea =({label,name,formFields,setFormField}:iProps) =>{
const [val,setVal] =useState('')
const {t,i18n}= useTranslation ()
let lang= 'en'
const handleChange = (e:React.ChangeEvent) =>{
    let input = e.target as HTMLInputElement
    setFormField('Message',input.value,false)
}
useEffect (()=>{
lang = i18n.language
},[i18n])
    return (
        <textarea
        onChange={(e:React.ChangeEvent)=>handleChange(e)}
        value={formFields[name]}
        className='textArea'
        aria-label={label}
        placeholder={label}
        style={{
            border:formFields[`${name}Error`]?'1px solid red':'',
            textAlign:lang==="en"?'right':'left'
      }}
        >

        </textarea>
         
    )
}

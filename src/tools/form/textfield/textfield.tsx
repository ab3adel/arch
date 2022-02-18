import './textfield.scss'
import {TextareaAutosize} from '@mui/material'
import React, {useState} from 'react'
export const TextArea =({label}:{label:string}) =>{
const [val,setVal] =useState('')
const handleChange = (e:React.ChangeEvent) =>{
    let input = e.currentTarget as HTMLInputElement
    setVal(input.value)
}
    return (
        <textarea
        onChange={(e:React.ChangeEvent)=>handleChange(e)}
        value={val}
        className='textArea'
        aria-label={label}
        placeholder={label}
        >

        </textarea>
         
    )
}
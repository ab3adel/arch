import './input.scss'
import {TextField} from '@mui/material'
import React, {useState} from 'react'
interface iProps {name:string,validator:Function,label:string,type:'number'|'text'|'email'}
export const Input =({name,validator,label,type}:iProps) =>{
const [err,setErr] =useState(false)
const [val,setVal] =useState('')
const handleChange =(e:React.ChangeEvent) =>{
let input = e.currentTarget as HTMLInputElement
setErr(pre=>Boolean(validator(input.value)))
setVal(input.value)
}
    return (
        <TextField
        label={label}
        error={err}
        onChange={(e:React.ChangeEvent)=>handleChange(e)}
        value={val}
        helperText={''}
        name={name}
        className="inputField"
        type={type}
        />
    )
}
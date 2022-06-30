import 
PhoneInput,{isValidPhoneNumber}
from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {FormControl} from '@mui/material'
import { useState } from 'react'

import './phoneNumber.scss'
export const PhoneNumber =() =>{
const [value,setValue]=useState<any >()

    return (
        <FormControl className="phoneFormControl">

            <PhoneInput 
            className="phoneNumber"
             value={value}
             onChange={setValue} 
             international
             
          />
        </FormControl>
    )
}
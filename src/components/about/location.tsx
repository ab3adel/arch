import {Divider} from '@mui/material'
import { useState } from 'react'


interface iProps {left:string,top:string,showInfo:boolean,country:string,setShowInfo:Function}
export const Location = ({left,top,showInfo=false,country,setShowInfo}:iProps) => {


    return (
        <div className={showInfo?"markContainer":'unHoveredMark' }
           style={{left,top}}
            onMouseOver={()=>setShowInfo(country)}
            onClick={()=>setShowInfo(country)}
            >
        
            <div style={{visibility:showInfo?'visible':'hidden'}} 
                 className="markInfo">
                <div className="title">
                    <h5>{country}</h5>
                </div>
                <Divider/>
                <div className="body">
                    <p>+44738292922</p>
                    <p>3K.Ikoniks@gmail.com</p>
                    <p>37 ST Main</p>
                </div>
            </div>
          
        </div>
    )
}


import {useState} from 'react'
export const RectangleImage =({srcImg}:{srcImg:string}) =>{

const [open,setOpen] =useState(false)
    return (
        <div className="rectangleContainer"  onClick={()=>setOpen(true)}>
            <img src={srcImg} />
            
        </div>
    )
}
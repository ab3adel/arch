
import {useState} from 'react'

export const SquareImage =({imgSrc}:{imgSrc:string}) =>{

const [open,setOpen] = useState(false)
    return (
        <div className="squareContainer" onClick={()=>setOpen(true)}>
            <img src={imgSrc} />
          
        </div>
    )
}
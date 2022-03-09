
import 
{
    Divider
    ,TextField
} 
from '@mui/material'
import { useEffect, useState } from 'react'
interface iProps {img:string,text:string,title:string,leftDir:boolean}
export const Holder =({img,text,title,leftDir}:iProps) =>{
    const [showMore,setShowMore]= useState(false)
    const [enableReadMore,setEnableReadMore]=useState(false)
const handleShowMore =() =>{
setShowMore(!showMore)
}
useEffect(()=>{
    if (text.length > 200) setEnableReadMore(true)
},[])

    return (
        <div className={leftDir?"ldHolder":'rdHolder'}>
            <div className="floatingBox" >
                <div className="info">
                    <legend>Location</legend>
                    <span>Australia</span>
                </div>
                <div className="info">
                    <legend>Price</legend>
                    <span>55765$</span>
                </div>
                <Divider/>
                <div className="searchInput">
                    <TextField className="serviceInput" placeholder='Search' />
                </div>
            </div>
            <div className="textHolder">
                <h3>{title}</h3>
                <p>

                   {text.length < 200 || showMore ? <>
                   {text}
                   <span style={{visibility:enableReadMore?'visible':'collapse'}} 
                         onClick={()=>handleShowMore()} >
                             Read Less
                    </span>
                   </>
                    : <>
                        {text.slice(0,200)}
                        <span>&nbsp;</span>
                        <span 
                         onClick={()=>handleShowMore()} >Learn More</span>
                     </>}
                </p>
            </div>
            <img src={img} />
            
    </div>
    )
}
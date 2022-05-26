import 
{
    Divider
    ,TextField
    ,Skeleton
} 
from '@mui/material'
import { useEffect, useState } from 'react'
import {BlurrImageHolder} from './blurrimageholder'
interface iProps {img:string,text:string,title:string,leftDir:boolean,isLoading:boolean}
export const Holder =({img,text,title,leftDir,isLoading}:iProps) =>{
    const [showMore,setShowMore]= useState(false)
    const [imageLoaded,setImageLoaded]= useState(false)
    const [enableReadMore,setEnableReadMore]=useState(false)

const handleShowMore =() =>{
setShowMore(!showMore)
}
useEffect(()=>{
   
    if (text.length > 500) setEnableReadMore(true)
},[isLoading])

    return (
        <div className={leftDir?"ldHolder":'rdHolder'}>
           
           { isLoading ? 
                     <>
                      <Skeleton variant='rectangular' 
                        sx={{bgcolor:'grey.400'}}
                        width={"40%"} 
                        height={"30%"} 
                        animation="wave" / >
                      <Skeleton variant='rectangular' 
                        sx={{bgcolor:'grey.400'}}
                        width={"40%"} 
                        height={"50%"} 
                        animation="wave" / >
                     </>:
                        <>
                        <div className="textHolder">
                            <h3>{isLoading?"Title":title}</h3>
                            <p>
                            {text}
                            </p>
                        </div>
                     <BlurrImageHolder img={img}
                     imageLoaded={imageLoaded}
                     setImageLoaded={setImageLoaded}/>
                        </>
            }

            
    </div>
    )
}

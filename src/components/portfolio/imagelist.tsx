import 
{
    ImageList,
    ImageListItem
}
from '@mui/material'
import { useState } from 'react'
import {ImagePlaceHolder} from '../../tools/placeholder/imageplacehodler'
import {Inspector} from './inspector'
interface iProps {images:string[]}
export const PortfolioList =({images}:iProps)=>{
const [inspectorOptions,setInspectorOptions]=useState({open:false,img:""})

    return (
        <ImageList variant="masonry" cols={3} gap={3} >
            {
                images.map((ele:string,index:number)=>{
                    return (
                            <ImagePlaceHolder  
                            imgSrc={ele} 
                            key={index}
                            setZoom={setInspectorOptions}
                            />
                       
                    )
                })
            }
            <Inspector open={inspectorOptions.open} 
                       setOpen={()=>setInspectorOptions(pre=>({...pre,open:false}))} 
                       imgSrc={inspectorOptions.img}/>
        </ImageList>
    )
}
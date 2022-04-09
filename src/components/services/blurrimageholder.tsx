import { useEffect, useState } from "react"
import image2 from '../../images/back3.jpg'



export const BlurrImageHolder =(
    {img,imageLoaded,setImageLoaded}:{img:string,imageLoaded:boolean,setImageLoaded:Function})=>{
    const imageIsLoaded=() =>{
     
        setImageLoaded(true)
    }
    useEffect(()=>{
        const image = new Image()
        image.src=img
        image.onload=()=>imageIsLoaded()
    },[img])
 
      return (<>
     {imageLoaded? <img src={img} />: <img src={image2} style={{filter:'blur(1.5rem)'}}/>}
      </>)
    
}
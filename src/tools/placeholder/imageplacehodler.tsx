import { useEffect, useState } from "react"
import current from '../../images/back4.jpg'
import './imageplaceholder.scss'
import {ImageListItem} from '@mui/material'

interface iProps {imgSrc:string,setZoom:Function,num:number}

export const ImagePlaceHolder=({imgSrc,setZoom,num}:iProps)=>{
    const [currentImage,setCurrentImage]= useState({src:current,loading:true})
    useEffect(()=>{
        let mounted =true ;
        if (mounted) {

            const imageLoading = new Image ()
            imageLoading.src=imgSrc
            imageLoading.onload=()=>{
                setCurrentImage(pre=>({...pre,src:imgSrc,loading:false}))
            }
        }
    return ()=>{ mounted=false}
    },[])
    const handleZoomImage =()=>{
      
        setZoom((pre:any)=>({...pre,open:true,img:imgSrc,selectedNum:num}))
    }

    return (
        <>
      { 
        currentImage.loading?
        <ImageListItem >

            <img
            className={'blurredImage'}
            src={current}
           
            loading="lazy"
            />
        </ImageListItem>
        :
        <ImageListItem
         >

            <img
                src={`${imgSrc}?w=161&fit=crop&auto=format`}
                loading="lazy"
                onClick={()=>handleZoomImage()}
                
                style={{cursor:'pointer'}}
            /> 
        </ImageListItem>
       }
        </>
        
    )
}
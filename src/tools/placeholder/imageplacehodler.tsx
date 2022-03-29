import { useEffect, useState } from "react"
import current from '../../images/portfolio/0 (1).jpg'
import './imageplaceholder.scss'
import {ImageListItem} from '@mui/material'
interface iProps {imgSrc:string}

export const ImagePlaceHolder=({imgSrc}:iProps)=>{
    const [currentImage,setCurrentImage]= useState({src:current,loading:true})
    useEffect(()=>{
        const imageLoading = new Image ()
        imageLoading.src=imgSrc
        imageLoading.onload=()=>{
            setCurrentImage(pre=>({...pre,src:imgSrc,loading:false}))
        }
    
    },[])

    return (
        <>
      { 
        currentImage.loading?
        <ImageListItem >

            <img
            className={'blurredImage'}
            src={current}
            style={{opacity:currentImage.loading?0.5:1,transition:"opacity .15s linear"}}
            loading="lazy"
            />
        </ImageListItem>
        :
        <ImageListItem>

            <img
                src={`${imgSrc}?w=161&fit=crop&auto=format`}
                loading="lazy"
            />
        </ImageListItem>
       }
        </>
        
    )
}
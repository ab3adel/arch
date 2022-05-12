
import './loadingpage.scss'

import 
{
    Dialog,
    DialogContent
} 
from '@mui/material'
import { useEffect, useState,useLayoutEffect, useRef } from 'react'
import {Variants,motion} from 'framer-motion'
interface iProps {images:string[],isFinished:boolean,setIsFinished:Function}
interface iState {[key:string]:boolean}
const horizonalMotion:Variants= {
    initial:{
        y:0
    },
    second : i =>({
        y:[0,-70],
        transition:{
            delay:i,
            ease:'easeInOut',
           repeat:Infinity,
           repeatType:'mirror',
            duration:2
        }
    })
}
export const LoadingPage =({images,isFinished,setIsFinished}:iProps) =>{

    const [isLoaded,setIsLoaded]=useState<iState>({})
    const componentMounted=useRef(true)
    useEffect(()=>{
        let newFields= {...isLoaded} 
        for (let i=0;i <images.length;i++) {
           newFields[`image${i}`]=false 
        } 
        setIsLoaded(newFields)

        let imagesCollection= document.querySelectorAll('.loadedImageCheck')  as NodeListOf<HTMLImageElement>
        imagesCollection.forEach((ele,index:number)=>{
        
            ele.addEventListener('load',()=>handleLoaded(index),{once:true})
        })
        
       },[])
    useEffect(()=>{
        let newFields= {...isLoaded}
        let arr =Object.keys(newFields).filter (ele=> !newFields[ele])
        if (arr.length ===0 && Object.keys(newFields).length >0) { 
            setIsFinished(false)
        }
    

    },[isLoaded])
const handleLoaded =(num:number) =>{
  
    let newFields= {...isLoaded}
    newFields[`image${num}`]=true
    setIsLoaded(pre=>({...pre,...newFields}))
}
const handleClose =()=>setIsFinished(false)

    return (
        <>
       {isFinished && (<div className="images">
            {images.map((ele,index)=>{
                return (<img  
                     className='loadedImageCheck'
                     style={{position:'absolute',visibility:'collapse'}}
                    src={ele} 
                    key={index}/>)
            })}
        </div>)}
        <Dialog 
        open={isFinished} 
        className="loadingPage"
        disableEscapeKeyDown
        onClose={(_,reason)=>{
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                handleClose()
            }

        }}
        >
            <DialogContent>
                <div className="loadingAnimation">
                    <motion.div custom={0} 
                    animate={'second'} 
                    initial={'initial'}
                    variants={horizonalMotion}>
                        3</motion.div>
                    <motion.div custom={0.3}
                     animate={'second'} 
                     initial={'initial'}
                     variants={horizonalMotion}>
                        D</motion.div>
                    <motion.div  custom={0.6}
                    animate={'second'} 
                    initial={'initial'}
                    variants={horizonalMotion}
                    className="dot">
                        .</motion.div>
                    <motion.div  custom={0.6}
                    animate={'second'} 
                    initial={'initial'}
                    variants={horizonalMotion}>
                        I</motion.div>
                    <motion.div custom={1.2}
                    animate={'second'} variants={horizonalMotion}>
                        K</motion.div>
                    <motion.div custom={1.5}
                    animate={'second'} variants={horizonalMotion}>
                        O</motion.div>
                    <motion.div custom={1.8} 
                    animate={'second'} variants={horizonalMotion}>
                        N</motion.div>
                    <motion.div custom={2.1}
                    animate={'second'} variants={horizonalMotion}>
                        I</motion.div>
                    <motion.div custom={2.4}
                    animate={'second'} variants={horizonalMotion}>
                        K</motion.div>
                    <motion.div custom={2.7}
                    animate={'second'} variants={horizonalMotion}>
                        S</motion.div>
                    
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}
import 
{
    Dialog,
    DialogActions,
    DialogContent,
    imageListClasses
} 
from '@mui/material'
import { Box } from '@mui/system'
import img from '../../images/portfolio/0 (8).jpg'
import 
{
    ArrowLeft,
    ArrowRight,
    Close
} 
from '@mui/icons-material'
import React, { useEffect } from 'react'
interface iProps {open:boolean,setOpen:Function
                ,imgSrc:string,imgList:string[]
                ,selectedNum:number,selectImage:Function}

export const Inspector = ({open,setOpen,imgSrc,imgList,selectedNum,selectImage}:iProps)=> {


    useEffect(()=>{
        window.addEventListener('keypress',(e)=>{
            console.log(e,'pressed')
        })
    },[])
const handleSelect=(str:string)=>{
    let scroll =document.querySelector('.toScroll') as HTMLDivElement
let box = document.querySelector('.scrollableContainer') as HTMLDivElement
let width = window.innerWidth
scroll.style.overflowX="scroll";
if (str === 'right') {
    scroll.scrollLeft = scroll.scrollLeft +width /2;
    
}
else {
    scroll.scrollLeft=scroll.scrollLeft - width/2
    
}
}
const keyPressed =(e:React.KeyboardEvent)=>{
    console.log(e)
}
    return (
        <Dialog open={open} onClose ={()=>setOpen (false)} className="inspectorDetails"
        onKeyPress={keyPressed}>
            <DialogContent 
             style={{
                backgroundImage:`url('${imgSrc}')`
                ,backgroundSize:'contain'
                ,backgroundPosition:'center'
            , backgroundRepeat:'no-repeat'}}
                >
               <ArrowLeft fontSize='inherit' className="leftArrow" 
               onClick={()=>handleSelect('left')}/>
               <ArrowRight fontSize='inherit' 
               className='rightArrow'
               onClick={()=>handleSelect('right')}
                /> 
                <Close className="closeButton" 
                   onClick={()=>setOpen(false)} />

            </DialogContent>
            <DialogActions className='toScroll'>
                <Box className="scrollableContainer">
                    {
                        imgList.map((ele,index)=>{
                            return (
                                <img className={index === selectedNum ?"selectedImage":''} 
                                      src={ele} 
                                      key={index} 
                                      onClick={()=>selectImage((pre:any)=>({...pre,img:ele,selectedNum:index}))}
                                      />
                            )
                        })
                    }
                   
                </Box>
            </DialogActions>
        </Dialog>
    )
}
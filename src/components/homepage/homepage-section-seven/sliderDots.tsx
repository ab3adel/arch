import {Grid} from '@mui/material'
import React from 'react'



export const SliderDots =({num}:{num:number})=>{
let arr= new Array(num).fill('button')
const selectDot =(e:React.MouseEvent,dotNumber:number)=>{
    let windowWidth = window.innerWidth
    let btns=document.querySelectorAll('.buttonDot')
    let previousActive =0
    let scrollController= document.querySelector('#scrollController') as HTMLDivElement
    btns.forEach((ele)=>{
        if (ele.classList.contains('active'))
        {
           let strNum= ele.getAttribute('name')?.split('-')[1]
            previousActive=Number(strNum)
           
        }
        ele.classList.remove('active')
    })
    let target = e.target as HTMLButtonElement
    if (target.tagName === 'SPAN')target =target.parentElement as HTMLButtonElement

    target.classList.add(`active`)
    scrollController.style.overflowX='scroll';
    scrollController.scrollLeft=windowWidth * dotNumber 
    scrollController.style.overflowX='hidden';
}

    return (
        <Grid item xs={12} 
        sm={6} 
        md={4} 
        className="sliderDots">
            {
                arr.map((ele:string,index:number)=>{
                    return (
                        <button 
                         key={index}
                         name={`dot-${index}`}
                         className={index===0 ?"buttonDot active" : "buttonDot"}
                         onClick={(e:React.MouseEvent)=>selectDot(e,index)}>
                           <span></span>
                        </button>
                    )
                })
            }
               
       </Grid>
    )
}
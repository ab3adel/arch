import  './homepage-section-seven.scss'
import 
{
    Grid,
    Typography,
    Divider

}
from '@mui/material'
import img from '../../../images/homepage7/person.jpg'
import {ImageHolder} from './imageHolder'
import {SliderDots} from './sliderDots'
import { useEffect, useState } from 'react'
interface iEle {imgSrc:string,profession:string,name:string}

const arr =[
          {imgSrc:img,name:"Bashar",profession:'Manager'}
          ,{imgSrc:img,name:'Maher',profession:'Manager'},
         {imgSrc:img,name:'Mohammad',profession:'Developer'},
        {imgSrc:img,name:'Mick',profession:'Developer'},
,       {imgSrc:img,name:"salem",profession:'Manager'}
          ,{imgSrc:img,name:'sleem',profession:'Manager'},
         {imgSrc:img,name:'lama',profession:'Developer'},
        {imgSrc:img,name:'rana',profession:'Developer'},
          {imgSrc:img,name:"jack",profession:'Manager'}
          ,{imgSrc:img,name:'sona',profession:'Manager'},
         {imgSrc:img,name:'mohannad',profession:'Developer'},
        {imgSrc:img,name:'khalil',profession:'Developer'},
,       {imgSrc:img,name:"Gorge",profession:'Manager'}
          ,{imgSrc:img,name:'faek',profession:'Manager'},
         {imgSrc:img,name:'sam',profession:'Developer'},
       
    ]

export const HomepageSectionSeven=()=> {
    const [dotsNumber,setDotsNumber]=useState(3)
    useEffect(()=>{
        if (window.innerWidth > 500 && window.innerWidth <1024) {
            setDotsNumber(5)
        }
        if (window.innerWidth <500) {
            setDotsNumber(15)
        }
    },[])
    return (
        <div className="sectionSevenContainer">
          <Grid container 
           className="containerGrid"
           paddingTop={4}
           paddingBottom={4}>
              <Grid item container xs ={12}
                      className="sectionBody"
                      rowGap={3}>
                  <Grid item xs ={12}  
                      className="title">
                        <Typography color="inherit" 
                          className="lightFont">
                              [OUR PROFESSIONALS]
                        </Typography>
                        <Typography color="inherit">
                            Meet Our Skilled Team
                        </Typography>
                        <div className="divider">
                            . . . . . .  . . .  . . . 
                        </div>
                  </Grid>
                  <Grid item container xs={12}
                    className="imageListContainer"
                    id="scrollController">

                    <Grid item container  
                      className="imageList"
                     >
                        {
                            arr.map((ele:iEle | undefined,index:number)=>{
                                if (ele) {

                                    return (
                                        <ImageHolder {...ele} key={index} />
                                    )
                                }
                            })
                        }
                    </Grid>
                  </Grid>
                <Grid item xs ={12} 
                    className="slider"
                    
                    >
                        <SliderDots num={dotsNumber} 
                           />

                </Grid>
              </Grid>
          </Grid>
        </div>
    )
}
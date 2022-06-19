import './homepage-section-five.scss'
import img from '../../../images/portfolio/0 (8).jpg'
import img1 from '../../../images/portfolio/0 (9).jpg'
import img2 from '../../../images/portfolio/0 (10).jpg'
import img3 from '../../../images/portfolio/0 (11).jpg'
import img4 from '../../../images/portfolio/0 (12).jpg'
import img5 from '../../../images/portfolio/0 (13).jpg'
import img6 from '../../../images/portfolio/0 (14).jpg'
import {useTranslation} from 'react-i18next'
import 
{
    ImageList,
    ImageListItem,
    Typography,
    Grid
} 
from '@mui/material'
import {useNavigate} from 'react-router'
import { useEffect, useState } from 'react'
let arr= [img,img1,img2,img3,img4,img5,img6]
export const HomepageSectionFive = () => {
    const [screenWidth,setScreenWidth]=useState(0)
    const navigate =useNavigate()
    const {t,i18n} =useTranslation ()
useEffect(()=>{
let mounted= true
    if (window.innerWidth  && mounted) {
        setScreenWidth(window.innerWidth)
    }
    return ()=> {
        mounted =false
    }

},[window])

    return (
        <div className="homepageFiveContainer">
           <Grid 
                container 
                className="homepageFiveBody"
                rowGap={2}>
            <Grid item container xs ={12}
             display="flex"
             justifyContent={'center'}
             alignItems="center">
                <Typography
                sx={{fontSize:{xs:'1em',sm:'1.5em',md:'1.9em'}}}
                className="title">
                    ....<span> ....</span>
                </Typography>
            </Grid>
            <Grid item container xs ={12}
             display="flex"
             justifyContent={'center'}
             alignItems="center">
                <Typography
                sx={{fontSize:{xs:'1em',sm:'1.5em',md:'1.9em'}}}
                className="title">
                    Some of<span> Our Creative :</span>
                </Typography>
            </Grid>
            <Grid item container xs ={12}
             display="flex"
             justifyContent={'center'}
             alignItems="center">
                <Typography
                sx={{fontSize:{xs:'1em',sm:'1.5em',md:'1.9em'}}}
                className="title">
                      <span> .... </span>....
                </Typography>
            </Grid>
            <Grid item container xs ={12} >

                <ImageList sx={{width:'100%',height:'100%'}} 
                variant="masonry" 
                cols={screenWidth > 500 ?3 : 1}
                gap={2}>
                    {
                        arr.map((ele:string,index:number)=>{
                            return (

                                <ImageListItem key={index} onClick={()=>navigate('/portfolio')}>
                                    <img  src={`${ele}?w=161&fit=crop&auto=format`}
                                            srcSet={`${ele}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                            alt={ele}
                                            loading="lazy" />
                                </ImageListItem>
                            )
                        })
                    }
                </ImageList>
            </Grid>
           </Grid>
           
        </div>
    )
}
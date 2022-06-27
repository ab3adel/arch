import './careers.scss'
import 
{
    Grid,
    Typography,
    Box
} 
from '@mui/material'
import {CareerCard} from './careerCard'
import {SearchInput} from './search'
import {motion,Variants} from 'framer-motion'
import {useEffect,useState} from 'react'
const labelVariants:Variants= {
    animate: (custom)=>({
        y:[-100,0],
        opacity:[0,1],
        
        transition:{
            ease:'backInOut',
            duration:3,
            y:{
                delay:0.5 + custom.i
            }
        }
    }),
    header :(custom)=>(
       custom.isMobile ? {
            backgroundPositionX:['0%','50%'],
          
              transition:{
                  duration:3,
                  ease:'circOut'
              }
            }:{
          
            backgroundPositionY:['0%','50%'],
              transition:{
                  duration:3,
                  ease:'circOut'
              }}
              ) 
        
}
 const Careers =() =>{
    const [isMobile,setIsMobile]=useState(false)
    useEffect(()=>{
        if (window.innerWidth <501) {
            setIsMobile(true)
        }
    },[])
    console.log(isMobile,window.innerWidth)
    return (
        <Grid container 
         spacing={2}
         rowGap={4}
         className="careersContainer">
            <Grid item xs={12} >
                <motion.div className="careersHeader"
                 variants={labelVariants}
                 whileInView={'header'}
                 viewport={{once:true}}
                 custom={{isMobile}}>

                    <Box
                    display="flex"
                    justifyContent={'center'}>
                        <motion.p 
                        variants={labelVariants}
                        whileInView={'animate'}
                        viewport={{once:true}}
                        custom={{i:0.5}}
                        >
                            Be creative ,
                        </motion.p> 

                        <motion.p 
                        variants={labelVariants}
                        whileInView={'animate'}
                        viewport={{once:true}}
                        custom={{i:0.9}}
                        >
                            Be productive ,
                        </motion.p> 
                        <motion.p 
                        variants={labelVariants}
                        whileInView={'animate'}
                        viewport={{once:true}}
                        custom={{i:1.2}}
                        >
                            Be part of our team
                        </motion.p> 
                    
                    </Box>
                </motion.div>
            </Grid>
            <Grid item container 
             xs={12}
             justifyContent="center">

                <SearchInput />
            </Grid>
            <Grid 
               item 
               container 
               xs={12}
               sm={11}
               md={11}
               rowGap={3}
               justifyContent='center'
             >
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
            </Grid>
        </Grid>
    )
}
export default Careers;
import { EventNoteRounded, StarRateTwoTone } from '@mui/icons-material'
import {Grid,Typography} from '@mui/material'
import { current } from '@reduxjs/toolkit'
import {motion,Variants} from 'framer-motion'
import { useEffect, useState ,useRef, useReducer} from 'react'
import {useInView} from 'react-intersection-observer'
interface iAction {type:string,payload?:any}
const initialData= {
    
        currentClients:0
       ,yearsOfExperience:0
       ,officesWorldWide:0
       ,ordersAroundWorld:0
     
}
const reducer= (state=initialData ,action:iAction) =>{
    switch (action.type) {
        case  "go":
            let newClient=state.currentClients
            let newYears=state.yearsOfExperience
            let newOffice= state.officesWorldWide
            let newOrder = state.ordersAroundWorld
          if (newClient <888) {
              newClient++
          }
          if (newYears < 10) {
              newYears++
          }
          if (newOffice < 200) {
              newOffice++
          }
          if (newOrder <880) {
              newOrder++
          }
          return ({...state,currentClients:newClient
                           ,yearsOfExperience:newYears
                        ,officesWorldWide:newOffice
                    ,ordersAroundWorld:newOrder})
        default :
        return state            

    }
}
export const Counters =() =>{
const [counters,dispatch] =useReducer(reducer,initialData)
const once = useRef(true)                       
let [num,setNum] =useState(0)              
const {ref,inView} =useInView()  
                                      
useEffect(()=>{
if (inView ) {
once.current=false

 setInterval(() => {
     dispatch({type:'go'})
});
}
},[inView])

    return (
        <div style={{width:'100%',height:'100%'}} 
              ref={ref} className="counters">

            <Grid item container xs ={12} rowGap={2}>
                <Grid item xs={6} sm={3} md={3}>
                <motion.div className="counter">
                        <Typography className="ligtherFont" sx={{fontSize:'inherit'}} >[{counters.currentClients}+]</Typography>
                        <Typography variant="body1" sx={{fontSize:'inherit'}}>Current Clients</Typography>
                </motion.div>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <motion.div className="counter">
                        <Typography className="ligtherFont" sx={{fontSize:'inherit'}} >[{counters.officesWorldWide} +]</Typography>
                        <Typography variant="body1" sx={{fontSize:'inherit'}}>Offices WorldWide</Typography>

                    </motion.div>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <motion.div className="counter">
                        <Typography className="ligtherFont" sx={{fontSize:'inherit'}} >[{counters.yearsOfExperience}+]</Typography>
                        <Typography variant="body1" sx={{fontSize:'inherit'}}>Years of Experience</Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <motion.div className="counter">
                    <Typography className="ligtherFont" sx={{fontSize:'inherit'}}>[{counters.ordersAroundWorld}+] </Typography> 
                    <Typography variant="body1" sx={{fontSize:'inherit'}}>Projects</Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}
import './portfolioList.scss'
import {Grid,Tab,Tabs} from '@mui/material'
import {Holder} from './holder'
import {TabPanel} from './tabPanel'
import img1 from '../../../images/portfolio/1.jpg'
import {useState} from 'react'


let imgsArr: string[]=[img1,img1,img1,img1,img1,img1]
let sections= ['Archeticture','Interiour','Exterior']

export const PortfolioList =() =>{
   const [value,setValue]=useState(0)
    
    const [isFinished,setIsFinished] =useState(true)
const handleChange =(e:React.SyntheticEvent<Element,Event>,newValue:number) =>{
    setValue(newValue)
}
    return (
        <Grid item container 
        xs ={12} 
        spacing={2}
        padding={4}
        >
            <Grid item container xs={12}>
            <Tabs value={value} 
                   onChange={handleChange} 
                   sx={{
                        width:'100%'
                        ,'& .MuiTabs-flexContainer':{
                            display:'flex'
                        ,justifyContent:'space-evenly'
                        ,'& .MuiButtonBase-root' : {
                            textDecoration:'none'
                            ,color:'white'
                        },
                    }
                   , '& .MuiTabs-indicator ': {
                        background:'rgb(184, 184, 31)'
                    }
                        }}
                   >
                    <Tab label="Archeticture"  />
                    <Tab label="Interior"  />
                    <Tab label="Exterior"  />
            </Tabs>
                
            </Grid>
            <Grid item container  
                xs ={12} 
                spacing={4}
                padding={4}>
                 <TabPanel value={value} index={0} >

                    {imgsArr.map((ele:string,index:number)=>{

                        return (
                            <Holder imgSrc={ele} key={index} section={sections[value]} />
                        )
                    })}
                 </TabPanel>
                 <TabPanel value={value} index={1}>

                    {imgsArr.map((ele:string,index:number)=>{

                        return (
                            <Holder imgSrc={ele} key={index} section={sections[value]} />
                        )
                    })}
                 </TabPanel>
                 <TabPanel value={value} index={2}>

                    {imgsArr.map((ele:string,index:number)=>{

                        return (
                            <Holder imgSrc={ele} key={index} section={sections[value]} />
                        )
                    })}
                 </TabPanel>
        </Grid>

        </Grid>
    )
}
import './homepage-section-two.scss'
import 
 {
     Grid
     ,Typography
     ,Divider
 }
 from '@mui/material'

import back from '../../../images/homepage2/homepage2.jpg'
import {useTranslation} from 'react-i18next'
import {Sections} from './sections'
import {Counters} from './counters'
import {motion,Variants} from 'framer-motion'
const textVariant:Variants ={
    initial : {
        x:-300,
        opacity:0
    },
    second :{
        opacity:1,
        x:0,
        transition:{
            
            duration:2,
            ease:'backInOut',
            delay:.5,
            opacity:{
                duration:1,
                ease:'linear'
            }
        }
    },
    hiden:{
        opacity:0,
        rotateX:'90deg',
    },
    showTitle :{
        opacity:[0,1],
        rotateX:['90deg','0deg'],
        transition:{
            
            duration:2,
            ease:'backInOut',
            delay:.5,
            opacity:{
                duration:1,
                ease:'linear'
            }
        }

    }
}
export const HomepageSectionTwo =() =>{
    const {t} = useTranslation()


    return (
        <Grid container 
              
              className='homepageSectionTwoContainer'
            
              >
            <Grid item xs ={12} justifyContent="center">
                <Typography variant={'h3'}
                           justifyContent="center"
                            className="homepageTwoTitle">
                  {t("About")} <span>3D.Ikoniks</span>
                </Typography>
            </Grid>      
            <Grid item container xs={12}
              rowGap={5}
              
              >
                <Grid item lg={1} md={1} sm={0} xs={0} />
                    <Grid item lg={7} md={7} sm={12} 
                       xs={12} 
                         className="partOne"  
                    >
                         <motion.div
                        variants={textVariant}
                        initial='hiden'
                        whileInView={'showTitle'}
                        viewport={{once:true}}
                        
                         >
                            <Typography 
                                variant="subtitle1"
                                className="partOneTitle"
                                color='inherit'
                                sx={{fontSize:{xs:'1em',sm:'1em',md:'2em'}}}
                            >
                            {t("WeTurnIdea")}<span>.</span>
                            </Typography>
                         </motion.div>
                        <motion.div
                        variants={textVariant}
                        initial='initial'
                        whileInView={'second'}
                        viewport={{once:true}}
                        
                         >

                            <Typography 
                                variant="body1"
                                color='inherit'
                            className="partOneBody"
                            >
                                <span>"</span>Proident cillum tempor cupidatat veniam amet aliqua. 
                                Minim ullamco magna pariatur sunt. Voluptate nisi sint 
                                anim enim in ex incididunt aute sit voluptate. Lorem ea 
                                ut pariatur est sunt qui anim incididunt amet incididunt 
                                enim.Nostrud dolor sunt esse deserunt labore esse officia. 
                                Enim pariatur veniam dolore ad irure ex anim mollit consectetur sit eu. 
                                Pariatur aliquip reprehenderit do ullamco.<span>"</span>
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item  container
                        lg={4} md={4} sm={12} 
                        xs={12} 
                        className="partTwo" 
                        
                        >
                         <img src ={back} />
                    </Grid>
                    <Grid item xs={12}
                     className='divider'>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item  container
                        xs={12} 
                        sm={12} 
                        md={12} 
                        lg={12}
                       direction={'column'}
                       rowGap={3}
                       className="partThree" >
                      <Sections />
                    </Grid>
                  
                    {/* <Grid item 
                        xs={12} 
                        sm={12} 
                        md={12} 
                        lg={12}
                        direction={'column'}
                        className="partFour" 
                        >
                       <Counters />
                    </Grid> */}


            </Grid>      

        </Grid>
    )
}
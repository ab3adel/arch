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
              rowGap={5}>
                    <Grid item lg={8} md={8} sm={12} 
                       xs={12} 
                         className="partOne"  
                    >
                        <Typography 
                            variant="subtitle1"
                            className="partOneTitle"
                            color='inherit'
                            sx={{fontSize:{xs:'1em',sm:'1em',md:'2em'}}}
                        >
                           {t("WeTurnIdea")}<span>.</span>
                        </Typography>
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
                    <Grid item  
                        xs={12} 
                        sm={12} 
                        md={12} 
                        lg={12}
                       direction={'column'}
                       rowGap={3}
                       className="partThree" >
                      <Sections />
                    </Grid>
                  
                    <Grid item 
                        xs={12} 
                        sm={12} 
                        md={12} 
                        lg={12}
                        direction={'column'}
                        className="partFour" 
                        >
                       <Counters />
                    </Grid>


            </Grid>      

        </Grid>
    )
}
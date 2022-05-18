import './homepage-section-two.scss'
import 
 {
     Grid
     ,Typography
 }
 from '@mui/material'
import arch from '../../../images/homepage2/icon-architecture.png'
import planning from '../../../images/homepage2/icon-planing.png'
import interiors from '../../../images/homepage2/icon-interiors.png'
import back from '../../../images/homepage2/homepage2.jpg'
import { fontSize } from '@mui/system'

export const HomepageSectionTwo =() =>{



    return (
        <Grid container 
              
              className='homepageSectionTwoContainer'>
            <Grid item xs ={12} justifyContent="center">
                <Typography variant={'h3'}
                           justifyContent="center"
                            className="homepageTwoTitle">
                    About <span>3D.Ikoniks</span>
                </Typography>
            </Grid>      
            <Grid item container xs={12}>
                    <Grid item lg={4} md={4} sm={6} 
                       xs={12} 
                         className="partOne"  
                    >
                        <Typography 
                            variant="subtitle1"
                            className="partOneTitle"
                            color='inherit'
                            sx={{fontSize:{xs:'1em',sm:'1em',md:'2em'}}}
                        >
                            We turn idea into works of art<span>.</span>
                        </Typography>
                        <Typography 
                            variant="body1"
                            color='inherit'
                           className="partOneBody"
                        >
                            Proident cillum tempor cupidatat veniam amet aliqua. 
                            Minim ullamco magna pariatur sunt. Voluptate nisi sint 
                            anim enim in ex incididunt aute sit voluptate. Lorem ea 
                            ut pariatur est sunt qui anim incididunt amet incididunt 
                            enim.Nostrud dolor sunt esse deserunt labore esse officia. 
                            Enim pariatur veniam dolore ad irure ex anim mollit consectetur sit eu. 
                            Pariatur aliquip reprehenderit do ullamco.
                        </Typography>
                    </Grid>
                    <Grid item  container
                        lg={3} md={3} sm={6} 
                        xs={12} 
                        className="partTwo" 
                        
                        >
                        <Grid item xs={12}>

                            <Typography 
                                variant="subtitle1"
                                color='inherit'
                                className="partTwoTitle"
                                sx={{fontSize:{xs:'1em',sm:'1em',md:'2em'}}}>
                            Our Specialization <span>:</span> 
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} 
                        
                        className="partTwoBody">
                            <Grid item xs={12} direction="column">
                                <img src={arch} />
                                <Typography 
                                    color='inherit'
                                    variant='subtitle1' >
                                    Architecture
                                </Typography>
                            </Grid>
                            <Grid item xs={12} direction="column">
                                <img src={interiors} />
                                <Typography 
                                    color='inherit'
                                    variant='subtitle1' >
                                    Interiors
                                </Typography>
                            </Grid>
                            <Grid item xs={12} direction="column">
                                <img src={planning} />
                                <Typography 
                                    color='inherit'
                                    variant='subtitle1' >
                                    Planning
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item 
                        xs={12} 
                        sm={12} 
                        md={4} 
                        lg={4}
                    
                        className="partThree" >
                        <img src ={back} />
                    </Grid>

            </Grid>      

        </Grid>
    )
}
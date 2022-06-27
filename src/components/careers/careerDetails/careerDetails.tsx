import './careerDetails.scss'
import 
{
    Grid,
    Typography,
    Divider,
    Button
} 
from '@mui/material'
import 
{
    LocationCity
    ,LocationOn
    ,LockClock
    
}
from '@mui/icons-material'



export const CareerDetails =() =>{


    return (
       <div className="careerDetailsContainer">
        <Grid container 
         sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}
        justifyContent="center"
        >
            <Grid item container xs= {12} sm={11} md={11}
               sx={{padding:{xs:'0.5em',sm:'2em',md:'2em'}}}
            rowGap={1}
            className="careerDetails">

                <Grid item container xs={12} className="careerTitle"
                 rowGap={1}>
                    <Grid item xs={12}
                      display="flex"
                      justifyContent={'center'}
                    >
                        <Typography
                        sx={
                            {
                                fontSize:{xs:'1.2em',sm:'1.5em',md:'1.5em'}
                            }
                        }
                       
                        >
                            Front End Developer
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <LocationCity/>
                            Germany -stuttgart
                        </Typography>

                    </Grid>
                    <Grid item xs ={12}>

                        <Typography 
                       alignItems={"center"}>
                           <LocationOn/> inOffice- <LockClock />Full Time
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item container xs={12} className="careerDetailsBody">
                    <Grid item xs ={12} className="qualification">
                        <Typography className="title">
                            Qualifications :
                        </Typography>
                        <Typography className="body">
                            <span>.</span> Duis amet cupidatat sint adipisicing irure ullamco est sit
                            <br/>
                            
                            <span>.</span> Minim pariatur adipisicing officia magna ipsum duis tempor 
                            <br/>
                            <span>.</span>id reprehenderit enim. Laborum laborum aliquip ipsum anim
                            <br/>
                            <span>.</span>Ex ipsum commodo adipisicing quis ullamco non nulla nostrud
                            <br/>
                            <span>.</span> Qui irure officia irure magna veniam eu enim. Amet aute qui
                            <br/>
                            <span>.</span> officia id sunt est excepteur
                            <br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider></Divider>
                    </Grid>
                    <Grid item container xs ={12} className="fullDescription"
                          sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}
                      rowGap={2}>
                        <Grid item xs={12} className="title"
                            display="flex"
                            justifyContent={'center'}
                          >

                            <Typography
                            sx={{
                                fontSize:{xs:'1.1em',sm:'1.5em',md:'1.5em'},
                                fontWeight:'bold'
                            }} >
                                Full Job Description
                            </Typography>
                        </Grid>
                        <Grid item container xs ={12} className="body"
                         rowGap={2}>
                            <Grid item container xs={12} className="section">
                            <Grid item xs ={12} className="title">
                                <Typography >
                                    About us :
                                </Typography>
                            </Grid>
                            <Grid item xs ={12} className="body"
                              sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}>
                                <Typography>
                                Duis amet cupidatat sint adipisicing irure ullamco est sit
                                Minim pariatur adipisicing officia magna ipsum duis tempor 
                                id reprehenderit enim. Laborum laborum aliquip ipsum anim
                                Ex ipsum commodo adipisicing quis ullamco non nulla nostrud
                                Qui irure officia irure magna veniam eu enim. Amet aute qui
                                officia id sunt est excepteur
                                </Typography>
                            </Grid>
                            </Grid>
                            <Grid item container xs={12} className="section">
                            <Grid item xs ={12} className="title">
                                <Typography >
                                    What you'll do here :
                                </Typography>
                            </Grid>
                            <Grid item xs ={12} className="body"
                                 sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}>
                                <Typography>
                                Duis amet cupidatat sint adipisicing irure ullamco est sit
                                Minim pariatur adipisicing officia magna ipsum duis tempor 
                                id reprehenderit enim. Laborum laborum aliquip ipsum anim
                                Ex ipsum commodo adipisicing quis ullamco non nulla nostrud
                                Qui irure officia irure magna veniam eu enim. Amet aute qui
                                officia id sunt est excepteur
                                </Typography>
                            </Grid>
                            </Grid>
                            <Grid item container xs={12} className="section">
                            <Grid item xs ={12} className="title">
                                <Typography >
                                    What you'll bring to the team :
                                </Typography>
                            </Grid>
                            <Grid item xs ={12} className="body"
                                 sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}>
                                <Typography>
                                Duis amet cupidatat sint adipisicing irure ullamco est sit
                                Minim pariatur adipisicing officia magna ipsum duis tempor 
                                id reprehenderit enim. Laborum laborum aliquip ipsum anim
                                Ex ipsum commodo adipisicing quis ullamco non nulla nostrud
                                Qui irure officia irure magna veniam eu enim. Amet aute qui
                                officia id sunt est excepteur
                                </Typography>
                            </Grid>
                            </Grid>
                            <Grid item container xs={12} className="section">
                            <Grid item xs ={12} className="title">
                                <Typography >
                                    Benefits :
                                </Typography>
                            </Grid>
                            <Grid item xs ={12} className="body"
                           sx={{padding:{xs:'0.5em',sm:'1.1em',md:'1.1em'}}}>
                                <Typography>
                                Duis amet cupidatat sint adipisicing irure ullamco est sit
                                Minim pariatur adipisicing officia magna ipsum duis tempor 
                                id reprehenderit enim. Laborum laborum aliquip ipsum anim
                                Ex ipsum commodo adipisicing quis ullamco non nulla nostrud
                                Qui irure officia irure magna veniam eu enim. Amet aute qui
                                officia id sunt est excepteur
                                </Typography>
                            </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container xs={12}
                 className="buttonContainer">
                    <Grid item xs={4}
                    className="apply">
                        <Button >
                            Applay now
                        </Button>
                    </Grid>    
                </Grid>
            </Grid>
        </Grid>
       </div>
    )
}
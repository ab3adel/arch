import './footerSection.scss'
import 
{
    Grid,
    Typography,
    Box,
    Divider
}
from '@mui/material'
import 
{
    Instagram,
    Twitter,
    Telegram,
    Facebook,
    LocationCity,
    Email,
    Phone,
    Copyright
    
} 
from '@mui/icons-material'
export const Footer =()=>{
    return (
        <div className="footerSectionContainer">
            <Grid container
              rowGap={4}
              display={'flex'}
              justifyContent={'space-between'} 
              height={'100%'}
              padding={4}>
               
                <Grid item container 
                     padding={4}>
                    <Grid item 
                        container 
                        xs ={12} sm={6} md={4} 
                        padding={2}
                        rowGap={2}>
                        <Grid item xs={12}>
                            <Typography color="inherit"
                            variant='h4'
                            className="title logo">
                                Ikoniks<span>.</span>3D
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="inherit"
                                variant='body1'
                                className="lightFont">
                                We provides a full range of interior design, architectural design
                            </Typography>
                        </Grid>
                        <Grid item xs ={12}
                        className="icons">
                            <Box >

                                <Instagram color="inherit"/>
                                <Telegram color="inherit" />
                                <Facebook color ="inherit" />
                                <Twitter color= "inherit"/>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid item container 
                        xs ={12} sm={6} md={4} 
                        padding={2}
                        rowGap={2}>
                        <Grid item xs={12}>
                            <Typography color="inherit"
                            variant='h4'
                            className="title">
                                Contacts

                            </Typography>
                        </Grid>
                        <Grid item  container xs={12}
                    
                        className='contacts'>
                            <Grid item xs={12}
                            className="contact">
                                <Box>

                                        <LocationCity color="inherit"/>
                                        <Typography color="inherit"
                                        className="lightFont">
                                            Filderbahnplatz.35 -
                                            70567 -Stuttgart
                                        </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs ={12}
                            className="contact">
                                <Box >

                                    <Email color="inherit" />
                                    <Typography color="inehrit"
                                            className="lightFont">
                                        service@ikoniks.de
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs ={12}
                            className="contact">
                                <Box>

                                    <Phone color="inherit" />
                                    <Typography color="inherit"
                                    className="lightFont">
                                        +(+49)17 -3935 -4932
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item container 
                            xs ={12} sm={6} md={4} 
                            padding={2}
                            rowGap={2}>
                        <Grid item xs={12}>
                            <Typography color="inherit"
                            variant='h4'
                            className="title">
                                Latest Works

                            </Typography>
                        </Grid>
                        <Grid item  xs={12}
                        className="links"
                        >
                            <Typography color='inherit' 
                            className="lightFont link"
                            >
                                3D design for building
                            </Typography>
                            <Typography color='inherit' 
                            className="lightFont link">
                                significant  Interior design 
                            </Typography>
                            <Typography color='inherit' 
                            className="lightFont link">
                                check our architecture desings
                            </Typography>
                        </Grid>

                    </Grid>
                
                </Grid>
                <Grid item xs={12}
                          className='divider'>
                        <Divider variant="fullWidth" />
                </Grid>
                <Grid item  container xs ={12} className="footerTail">
                    <Grid item xs={12} sm={12} md={10}>

                        <p>3D<span className='dot'>.</span>Ikoniks</p>
                       
                        <p><Copyright/> all Rights Reserved</p>
                        <p>by Ikoniks Software</p>
                    </Grid>
                    
                </Grid>
            </Grid>
        </div>
    )
}
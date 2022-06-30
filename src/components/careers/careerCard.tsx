import 
{
    Card,
    CardContent,
    CardActionArea,
    Divider,
    CardHeader,
    Grid,
    Typography,
    
} 
from '@mui/material'
import {LocationCity,LocationOn} from '@mui/icons-material'
import {useNavigate} from 'react-router'
let text = `
            Dolor magna cupidatat exercitation aliqua minim sunt. 
            Id dolor nulla ad proident ea pariatur labore enim culpa irure.
            Ut laborum voluptate sit proident do. Culpa Lorem ipsum consequat 
            adipisicing consequat nisi ea excepteur exercitation laborum aute 
            nostrud exercitation. Aliqua cillum Lorem est magna commodo ad labore 
            nisi laborum nostrud ad. Ullamco cillum pariatur irure sunt eiusmod velit 
            duis ipsum non enim consequat qui quis.
`
export const CareerCard =() =>{
const navigate = useNavigate()
    return (
        <Grid item container xs={12}  sm={10} md={10} className="cardContainer"
        padding={1}>

            <Card  onClick={()=>navigate('/careers/1')}
             style={{cursor:'pointer'}}>
                <CardContent className="cardContent" >
                    <Grid item xs={12} className="jobRole"
                    padding={1}>
                        <Typography>
                            Front End developer
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} className ="JobLocation"
                    padding={1}>
                        <Grid item xs={12} sm={4} md={4}
                            display="flex"
                            alignItems={'center'}>
                            <Typography 
                            fontWeight={'bold'}>
                                3D.Ikoniks
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} sm={8} md={8}>
                            <Grid item xs={1} sm={6} md={6}
                             justifyContent="right"
                            sx={{display:{xs:'none',sm:'flex',md:'flex'}}}>
                               <Divider orientation='vertical' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}
                             justifyContent="left"
                             display="flex">
                                 <Typography
                                 sx={{
                                    display:'flex',
                                    alignItems:'center',
                                   fontSize:{xs:'0.8em',sm:'1em'}

                                 }}>
                                    <LocationCity />
                                    Germany , stuttgart
                                </Typography>
                                <Typography
                                 sx={{
                                    display:'flex',
                                    alignItems:'center',
                                    fontSize:{xs:'0.8em',sm:'1em'}
                                 }}>
                                    <LocationOn />
                                    in office
                                </Typography>
                            </Grid>
                        
                        </Grid>

                    </Grid>
                    <Divider />
                    <Grid item xs={12}
                     >
                        <Typography className="title"
                        fontWeight={'bold'}>
                            Qualifications :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="jobDescription"
                    padding={1}>
                        <Typography>
                         {text.length > 30 ? text.slice(30):text}
                         <span className="hidden"></span>
                        </Typography>
                    </Grid>
                </CardContent>

            </Card>
        </Grid>
    )
}
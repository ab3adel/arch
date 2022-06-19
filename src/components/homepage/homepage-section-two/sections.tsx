import { Grid ,Typography } from "@mui/material"
import arch from '../../../images/homepage2/icon-architecture.png'
import planning from '../../../images/homepage2/icon-planing.png'
import interiors from '../../../images/homepage2/icon-interiors.png'
import {useTranslation} from 'react-i18next'

export const Sections =() =>{
    const {t} = useTranslation()
    return (
         <>
                {/* <Grid item xs={12}>

                    <Typography 
                        variant="subtitle1"
                        color='inherit'
                        className="partThreeTitle"
                        sx={{fontSize:{xs:'1.1em',sm:'1.1em',md:'2em'}}}>
                        {t("OurSpecialization")}<span>:</span> 
                    </Typography>
                </Grid> */}
                <Grid item container
                    xs={12}
                    className="partThreeBody"
                    
                    >
                    <Grid item xs={12} sm={6} md={4} 
                        direction="column"
                        className="specContainer"
                        padding={2}>
                        <div className="spec">

                            <img src={arch} />
                            <Typography 
                                color='inherit'
                                variant='subtitle1' >
                            { t("Architecture")}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}
                        direction="column"
                        className="specContainer"
                        padding={2}>
                        <div className="spec">

                            <img src={interiors} />
                            <Typography 
                                color='inherit'
                                variant='subtitle1' >
                                {t("Interiors")}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}
                        direction="column"
                        className="specContainer"
                        padding={2}>
                         <div className="spec">

                            <img src={planning} />
                            <Typography 
                                color='inherit'
                                variant='subtitle1' >
                                {t("Planning")}
                            </Typography>
                         </div>
                    </Grid>
                    </Grid>
         </>
    )
}
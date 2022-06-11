
import './homepage-section-six.scss'
import 
{
    Grid,
    Typography

}
from
"@mui/material"


export const HomepageSectionSix =() =>{



    return (
        <div className="sectionSixContainer">
            <Grid container
              >
                <Grid item  xs ={12} sm ={8} md={8}
                padding={3}>
                    <Typography color="inherit"
                      fontWeight={'bold'}
                      fontSize={'2em'}>
                    Get Incredible Interior Design Right Now!
                    </Typography>
                    <Typography color="inherit"
                     className="lightFont"
                    >
                    At every stage, we could supervise your project – controlling all the details and consulting the builders.
                    </Typography>
                </Grid>
                <Grid item container xs ={12} sm ={4} md={4}
                className="gridButton">
                    <Grid item xs={6}>

                        <div className="sectionSixButton">
                            <div className="button">
                                Get In Touch
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}
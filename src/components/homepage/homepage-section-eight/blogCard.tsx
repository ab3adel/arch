import { Description } from '@mui/icons-material'
import {Grid,Typography} from '@mui/material'

interface iProps {imgSrc:string,date:string
                 ,author:string,title:string,description:string}
export const BlogCard =({imgSrc,date,title,author,description}:iProps) =>{


    return (
                <Grid item container xs ={12} sm={6} md={4}
                className="blogCard"
                padding={2}
                rowGap={2}
            >
                <Grid item xs={12}>
                    <img src={imgSrc} />
                </Grid>
                {/* <Grid item container xs ={12}
                className="date">
                    <Grid item xs ={12} sm={8}
                     paddingRight={2}>

                        <Typography color="inherit"
                        className='lightFont' >
                           {date}
                        </Typography>
                        <div className="divider">
                            ..
                        </div>
                        <Typography color="inherit"
                        className='lightFont' >
                            {author}
                        </Typography>
                    </Grid>
                </Grid> */}
                <Grid item xs={12}
                    className="title">
                    <Typography color="inherit"
                    sx={{fontSize:{xs:'1em',sm:'1em',md:'1.3em'}}}
                    >
                        <a href='#'>

                            {title}
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={12} 
                className="lightFont">
                  {description.length> 25 ? description.slice(0,25) + '...':description}
                </Grid>
            </Grid>
    )
}
import './homepage-section-eight.scss'
import 
{
    Divider,
    Grid,
    Typography
} 
from '@mui/material'
import img from '../../../images/back6.jpg'
import {BlogCard} from './blogCard'
let arr =[
    {imgSrc:img,title:'our creativity is not limited our creativity is not limited  ', 
    description:`Ea ad officia Lorem est aliquip est do enim veniam 
    aliquip magna voluptate excepteur. Ex ut anim cupidatat ipsum magna. 
     deserunt consequat nostrud pariatur sunt. Ea ullamco anim laborum 
     .`, author:'Tom harly',date:'2022-6-2'},
    {imgSrc:img,title:'our creativity is not limited ', 
    description:`Ea ad officia Lorem est aliquip est do enim veniam 
    aliquip magna voluptate excepteur. Ex ut anim cupidatat ipsum magna. 
     deserunt consequat nostrud pariatur sunt. Ea ullamco anim laborum 
     .`, author:'Tom harly',date:'2022-6-2'},
    {imgSrc:img,title:'our creativity is not limited ', 
    description:`Ea ad officia Lorem est aliquip est do enim veniam 
    aliquip magna voluptate excepteur. Ex ut anim cupidatat ipsum magna. 
     deserunt consequat nostrud pariatur sunt. Ea ullamco anim laborum 
     .`, author:'Tom harly',date:'2022-6-2'},

]
export const HomepageSectionEight=() =>{


    return (
        <div className="sectionEightContainer">
            <Grid container 
               padding={2}>
                <Grid item container 
                   className="header" xs={12}
                   padding={2}>
                     <Grid item xs={12} sm={6} md={8}
                      className="title"
                      padding={3}>
                          <Typography 
                            color="inheirt" 
                            className="lightFont">
                                [OUR BLOG]

                          </Typography>
                          <Typography color="inheirt">
                              Read <span>Our Latest News !!</span>
                          </Typography>
                          <div className="dots">
                              ..........
                          </div>
                         
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}
                       
                       className="gridButton"
                        >
                            <Grid item xs={7}
                           
                            >
                                    <div className='sectionEightButton'>
                                        <div className="button" >
                                            View All 
                                        </div>
                                    </div>
                            </Grid>
                     </Grid>
                </Grid>
                <Grid item container xs ={12} 
                     
                       padding={3}
                        className="body"
                        spacing={2}
                        rowGap={2}>
                   {
                       arr.map((ele,index)=>{
                           return (
                               <BlogCard  {...ele} key={index}/>
                           )
                       })
                   }
                </Grid>
                
            </Grid>
        </div>
    )
}
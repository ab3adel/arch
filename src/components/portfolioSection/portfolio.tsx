import './portfolio.scss'
import 
{
    Grid,
    Typography
    
}
from '@mui/material'
import {ImageHolder} from './imageHolder'
import { useEffect, useLayoutEffect, useState } from 'react'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'
import {Inspector} from './inspector'
import img1 from '../../images/portfolio/0 (1).jpg'
import img2 from '../../images/portfolio/0 (2).jpg'
import img3 from '../../images/portfolio/0 (3).jpg'
import img4 from '../../images/portfolio/0 (4).jpg'
import img5 from '../../images/portfolio/0 (5).jpg'
import img6 from '../../images/portfolio/0 (6).jpg'
import img7 from '../../images/portfolio/0 (7).jpg'
import img8 from '../../images/portfolio/0 (8).jpg'
import img9 from '../../images/portfolio/0 (9).jpg'
let imgsArr: string[]=[img1,img2,img3,img4,img5,img6,img7,img8,img9]

const  Portfolio=()=>{
    const [isFinished,setIsFinished] =useState(true)
    const [inspectorOptions,setInspectorOptions]=useState({open:false,img:""})


return (
    <div className="portfolioSectionContainer">
        <Grid container 
              direction={'column'} 
              rowSpacing={2} 
              rowGap={2}
              xs={12}
              >
            <Grid 
               item 
               container 
               className="portfolioHeader flexBox headerWithImage"
               direction={"column"}
               xs={8} 
                >
                
                    <h1>3D Ikoniks Portfolio</h1>
               
            </Grid>
            <Grid 
              item
              container
              xs={12}
              spacing={2}
              className="portfolioText"
              >
                  <Grid 
                     item 
                     xs={12}
                     sm={12}
                     md={8}
                     lg={8}
                     
                     >
                         <p className='neatText'>
                            <span className="firstLetter">
                            E
                            </span>
                            <span>
                                t mollit ea reprehenderit veniam et. 
                                Labore non id esse proident enim enim 
                                tempor ullamco nulla nulla deserunt ea. 
                                Quis anim et anim aute ut quis do pariatur 
                                Quis anim et anim aute ut quis do pariatur 
                                ut dolore laboris cillum exercitation. 
                                Et mollit ea reprehenderit veniam et. 
                                Labore non id esse proident enim enim 
                                tempor ullamco nulla nulla deserunt ea. 
                                Quis anim et anim aute ut quis do pariatur 
                                ut dolore laboris cillum exercitation. 
                                Et mollit ea reprehenderit veniam et. 
                                Labore non id esse proident enim enim 
                                tempor ullamco nulla nulla deserunt ea. 
                                Quis anim et anim aute ut quis do pariatur 
                                ut dolore laboris cillum exercitation. 
                            </span>
                         </p>
                  </Grid>
                  <Grid 
                    item
                    container
                    className="backgroundShadowed"
                    xs={3}
                    sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'}}}>
                        <Grid 
                         item 
                         xs={6}
                         >
                             <Typography 
                               color={'inherit'}
                               variant="subtitle1"
                               >
                                 Title
                                <Typography 
                                   color={'inherit'}
                                  variant="body1"
                                  fontWeight={'light'}>
                                    Title
                                </Typography>
                             </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">
                                 Title
                             </Typography>
                             <Typography 
                             fontWeight={'light'}
                               variant="body1">
                                 Title
                             </Typography>

                        </Grid>
                        <Grid item xs={6}>
                             <Typography variant="subtitle1">
                                 Title
                             </Typography>
                             <Typography 
                             fontWeight={'light'}
                             variant="body1">
                                 Title
                             </Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">
                                 Title
                             </Typography>
                             <Typography 
                             fontWeight={'light'}
                             variant="body1">
                                 Title
                             </Typography>

                        </Grid>
                        <Grid item xs={6}>
                             <Typography variant="subtitle1">
                                 Title
                             </Typography>
                             <Typography 
                             fontWeight={'light'}
                             variant="body1">
                                 Title
                             </Typography>

                        </Grid>
                        <Grid item xs={6}>
                             <Typography variant="subtitle1">
                                 Title
                             </Typography>
                             <Typography 
                             fontWeight={'light'}
                             variant="body1">
                                 Title
                             </Typography>

                        </Grid>
                    </Grid>

            </Grid>
            <Grid 
            item
            container
            xs={12}
            justifyContent="center" >

                <Grid 
                item
                container
                spacing={2}
                justifyContent="center"
                xs={11} >
                    {
                        imgsArr.map((ele:string,index:number)=> {
                            return (
                                
                                    <ImageHolder  
                                     key={index} 
                                    imgSrc={ele} 
                                    setInspectorOptions={setInspectorOptions}
                                    />
                                
                            )
                        })
                    }
                </Grid>
            </Grid>
            
        </Grid>
             <Inspector open={inspectorOptions.open} 
                       setOpen={()=>setInspectorOptions(pre=>({...pre,open:false}))} 
                       imgSrc={inspectorOptions.img}/>


            {isFinished && (
                               <LoadingPage
                                isFinished={isFinished}
                                setIsFinished={setIsFinished}
                                images={imgsArr.slice(0,1)}/>
                           )}
    </div>
)

}
export default  Portfolio;
import {useEffect, useState} from 'react'
import { Grid, Typography } from "@mui/material"
import {ImageHolder} from './imageHolder'
import {LoadingPage} from '../../../tools/loadingpage/loadingpage'
import {Inspector} from '../inspector'
import './portfolioDetails.scss'
import {useGetNodeQuery,useGetCategoryQuery} from '../../../store/services/query'
import {useParams} from 'react-router'
import img1 from '../../../images/portfolio/1.jpg'
import img2 from '../../../images/portfolio/2.jpg'
import img3 from '../../../images/portfolio/3.jpg'
import img4 from '../../../images/portfolio/4.jpg'
import img5 from '../../../images/portfolio/5.jpg'
import img6 from '../../../images/portfolio/6.jpg'
import img7 from '../../../images/portfolio/7.jpg'


let imgsArr: string[]=[img1,img2,img3,img6,img1,img2]

interface iProps {setInspectorOptions:Function,imgsArr:string[]}



export const PortfolioDetails =() =>{
    const {id,slug} =useParams()
   
    console.log(id,slug)
    const {isLoading,data,isSuccess} =useGetCategoryQuery(3)
    const [isFinished,setIsFinished] =useState(true)
    const [inspectorOptions,setInspectorOptions]=useState({img:'',open:false})
    const [nodes,setNodes]=useState<string[]>([])
useEffect (()=>{
 if (isSuccess && data) {
     let array:any[]=[]
     let category =data.payload.filter(ele=>ele.id === Number(id))[0]
  
     let newNodes =category.nodes.filter ((ele:any)=>ele.title.en === slug)
                                 .map((ele:any)=>{

                                     if (ele.attachment) {
                                         array.push(`http://backend.test.ikoniks.de/${ele.attachment}`)
                                     }
                                     if (ele.background) {
                                        array.push(`http://backend.test.ikoniks.de/${ele.background}`)
                                     }
                                 })
                                 
     setNodes(array)
 }
 
     
},[isSuccess,isLoading])
    return (
        <>
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
                rowGap={4}
                justifyContent="center"
                xs={10} >
                    {
                        nodes.map((ele:any,index:number)=> {
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
            
            {isFinished && (
                               <LoadingPage
                                isFinished={isFinished}
                                setIsFinished={setIsFinished}
                                images={imgsArr.slice(0,1)}/>
                           )}
            {
                <Inspector open={inspectorOptions.open}
                          imgSrc={inspectorOptions.img}
                          setOpen={setInspectorOptions} />
            }
      </>
    )
}
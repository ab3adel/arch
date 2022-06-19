import './portfolio.scss'

import {useParams} from 'react-router-dom'
import {PortfolioList} from './imagelist'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'
import { useState } from 'react'
import {Grid} from '@mui/material'

let imgsArr:string[]= []
for (let i =1;i<31;i++ ){
  import(`../../images/portfolio/0 (${i}).jpg`).then(som=>imgsArr.push(som.default))

}

 const Portfolio =() =>{
   
    const slug = useParams()
    const [isFinished,setIsFinished] =useState(true)
    

    const text = `Aute occaecat ex aliquip deserunt. Consectetur et exercitation 
              ullamco enim pariatur. Eiusmod anim anim quis commodo. Est aliquip est 
              eiusmod reprehenderit ad duis est.
              ullamco enim pariatur. Eiusmod anim anim quis commodo. Est aliquip est 
              eiusmod reprehenderit ad duis est.
              ullamco enim pariatur. Eiusmod anim anim quis commodo. Est aliquip est 
              eiusmod reprehenderit ad duis est.
              `

    return (
        <Grid container 
           rowGap={2}
          className="portfolioContainer">
            <Grid item xs={12} className="portfolioHeader">
                <h2>3D Ikoniks Title</h2>
                <p> {text}</p>
            </Grid>
            <Grid item xs ={12} className="portfolioBody">
           
                {
                    <PortfolioList images={imgsArr}/>
                }
                
            </Grid>
             {isFinished && (
                <LoadingPage
                 isFinished={isFinished}
                 setIsFinished={setIsFinished}
                 images={imgsArr.slice(0,1)}/>
            )}
        </Grid>
    )
}
export default Portfolio;
import './portfolio.scss'

import {useParams} from 'react-router-dom'
import {PortfolioList} from './imagelist'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'
import { useEffect, useState } from 'react'
import {Grid} from '@mui/material'
import { ConstructionOutlined } from '@mui/icons-material'

// let imgsArr:string[]= []
// for (let i =1;i<31;i++ ){
//   import(`../../images/portfolio/0 (${i}).jpg`).then(som=>imgsArr.push(som.default))

// }

 const Portfolio =({nodes}:{nodes:any[]}) =>{
   
   
    const [isFinished,setIsFinished] =useState(true)
    const [imgsArr,setImgsArr]=useState([''])
    useEffect(()=>{
        if (nodes.length >0) {
            let newImages:any[]=[]
             nodes.map(ele=>{
                if (ele.attachment){
                    newImages.push('http://backend.test.ikoniks.de/'+ele.attachment)
                }
                if (ele.files.length> 0) {
                    ele.files.map((ele:any)=> {
                        newImages.push('http://backend.test.ikoniks.de/'+ele.url)
                    })
                }
               
            })
            setImgsArr(newImages)
        }

    },[nodes])

    return (
        <Grid container 
           rowGap={2}
          className="portfolioContainer">
            {/* <Grid item xs={12} className="portfolioHeader">
                <h2>3D Ikoniks Title</h2>
                <p> {text}</p>
            </Grid> */}
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
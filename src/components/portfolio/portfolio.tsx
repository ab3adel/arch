import './portfolio.scss'
import {RectangleImage} from './rectangle'
import {SquareImage} from './square'
import {useParams} from 'react-router-dom'
import {PortfolioList} from './imagelist'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'
import { useState } from 'react'
let imgsArr:string[]= []
for (let i =1;i<52;i++ ){
  let Img=   require(`../../images/portfolio/0 (${i}).jpg`)
  imgsArr.push(Img)
}

export const Portfolio =() =>{
    const slug = useParams()
    const [isFinished,setIsFinished] =useState(true)

    const text = `Aute occaecat ex aliquip deserunt. Consectetur et exercitation 
              ullamco enim pariatur. Eiusmod anim anim quis commodo. Est aliquip est 
              eiusmod reprehenderit ad duis est.`

    return (
        <div className="portfolioContainer">
            <div className="portfolioHeader">
                <h2>3D Ikoniks Title</h2>
                <p> {text}</p>
            </div>
            <div className="portfolioBody">
           
                {
                    <PortfolioList images={imgsArr}/>
                }
                
            </div>
            {isFinished && (
                <LoadingPage
                 isFinished={isFinished}
                 setIsFinished={setIsFinished}
                 images={imgsArr}/>
            )}
        </div>
    )
}
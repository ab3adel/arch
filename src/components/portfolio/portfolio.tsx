import './portfolio.scss'
import {RectangleImage} from './rectangle'
import {SquareImage} from './square'
import {useParams} from 'react-router-dom'


import Img from '../../images/back1.jpg'
import Img1 from '../../images/back2.jpg'
import Img2 from '../../images/back3.jpg'
import Img3 from '../../images/back4.jpg'
import Img4 from '../../images/back5.jpg'
import Img5 from '../../images/back6.jpg'
import Img6 from '../../images/back7.jpg'

export const Portfolio =() =>{
    const slug = useParams()

    let imgsArr= [Img,Img1,Img2,Img3,Img4,Img5]
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
            {imgsArr.map((ele,i)=>{
                let style={}
             style=window.innerWidth >1024?{flexDirection:'row-reverse'}:{flexDirection:'column-reverse'}
            return (
            <>
                {
           
                   i% 3 === 0 ?  <RectangleImage srcImg={ele} key={i} /> :<SquareImage imgSrc={ele} key={i} />
               }
               </>
                 )
                 
                })}
                
            </div>
        </div>
    )
}
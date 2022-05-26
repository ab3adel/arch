import './homepage-section-three.scss'
import {useNavigate} from 'react-router-dom'
import HolderImg from '../../../images/services/animation1.jpg'
import HolderImg1 from '../../../images/services/exterior.jpg'
import HolderImg2 from '../../../images/services/interior.jpg'
import HolderImg3 from '../../../images/services/product.jpg'
import {Holder ,iProps} from './holder'
import    { 
    ArrowLeftOutlined,
    ArrowRightOutlined
} 
from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
export const HomepageSectionThree = ()=> {
    const navigate =useNavigate()
    const {t}= useTranslation()
const data = [ 
    {imgSrc:HolderImg,title:t('3d animation videos')
    ,verticalTitle:t('Architeture'),to:89,navigateTo:(str:string)=>{},shortText:'Create a unique visual communication with the clients, with high quality 3d animation videos of your design or product.  '},
    {imgSrc:HolderImg1,title:t('Exterior 3D visualization')
    ,verticalTitle:'ARCHITECTURE',to:80,navigateTo:(str:string)=>{},shortText:'Create a perfect visual simulation of your architectural project with 3d technology '},
    {imgSrc:HolderImg2,title:t('Interior 3D visualization'),verticalTitle:'ARCHITECTURE'
    ,to:79,navigateTo:(str:string)=>{},shortText:'Ascend with your imagination to higher levels of creativity with interior 3D visualization for your designs. '},
    {imgSrc:HolderImg3,title:'Product visualization',verticalTitle:'ARCHITECTURE'
    ,to:10,navigateTo:(str:string)=>{},shortText:'Whatever your products may be, we can display them in a professional, and catchy way! '},
   
]
const slider=(str:string) =>{
    let slider = document.querySelector('.scrollableDiv') as HTMLDivElement
    if (str === 'next') {
        slider.scrollLeft=  slider.scrollLeft+200;
    }
    else {
        slider.scrollLeft=slider.scrollLeft -200;
    }
}
const toPortfolio =(id:number)=>{
    navigate(`/services/${id}`)
}
    return (
        <div className="homepageThreeContainer">
            <div className="homepageThreeHeader">
                <h3>{t('Our')} <span>&nbsp;</span><span>&nbsp;</span> <span>{t('Services')}</span></h3>
            </div>
            <div className="homepageThreeBody">
                <div className="scrollableDiv">

                    <div className="holders">
                        {data.map((ele:iProps,i:number)=>{
                        return( <Holder imgSrc={ele.imgSrc}
                                        navigateTo={toPortfolio}
                                        to={ele.to}
                                        key={i}
                                        title={ele.title}
                                        shortText={ele.shortText}
                                        verticalTitle={ele.verticalTitle}/>)
                        })}
                    </div>
                </div>
                
               {/* { <div className="previousArrow"  onClick={()=>slider('prev')}>
                    <ArrowLeftOutlined color='inherit' fontSize='inherit'/>
                    <p>prev</p>
                </div>
                <div className="nextArrow"  onClick={()=>slider('next')}>
                    <p>Next</p>
                    <ArrowRightOutlined color='inherit' fontSize='inherit'/>
                
                </div>
                } */}
            </div>
        </div>
    )
}
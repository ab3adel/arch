import './homepage-section-three.scss'
import HolderImg from '../../../images/homepage3/holder1.jpg'
import HolderImg1 from '../../../images/homepage3/holder2.jpg'
import HolderImg2 from '../../../images/homepage3/holder3.jpg'
import {Holder ,iProps} from './holder'
import    { 
    ArrowLeftOutlined,
    ArrowRightOutlined
} 
from '@mui/icons-material'
export const HomepageSectionThree = ()=> {
const data = [ 
    {imgSrc:HolderImg,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg1,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg2,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg1,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg2,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg1,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
    {imgSrc:HolderImg,title:'Modern Hotel in London',verticalTitle:'ARCHITECTURE'},
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
    return (
        <div className="homepageThreeContainer">
            <div className="homepageThreeHeader">
                <h3>Our <span>&nbsp;</span><span>&nbsp;</span> <span>Projects</span></h3>
            </div>
            <div className="homepageThreeBody">
                <div className="scrollableDiv">

                    <div className="holders">
                        {data.map((ele:iProps,i:number)=>{
                        return( <Holder imgSrc={ele.imgSrc}
                                        key={i}
                                        title={ele.title}
                                        verticalTitle={ele.verticalTitle}/>)
                        })}
                    </div>
                </div>
                
                <div className="previousArrow"  onClick={()=>slider('prev')}>
                    <ArrowLeftOutlined color='inherit' fontSize='inherit'/>
                    <p>prev</p>
                </div>
                <div className="nextArrow"  onClick={()=>slider('next')}>
                    <p>Next</p>
                    <ArrowRightOutlined color='inherit' fontSize='inherit'/>
                
                </div>
                
            </div>
        </div>
    )
}
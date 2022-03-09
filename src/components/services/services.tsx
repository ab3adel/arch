import './services.scss'
import image from '../../images/back1.jpg'
import image1 from '../../images/back2.jpg'
import image2 from '../../images/back3.jpg'
import {Holder} from  './holder'
interface obj {img:string,title:string,text:string}
let arr = [
    {img:image1,title:'Service Title'
     ,text:`Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.
    Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.
    Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.
    Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.
    Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.
    Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.`},
    {img:image2,title:'Service Title'
     ,text:`Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.`},
    {img:image1,title:'Service Title'
     ,text:`Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.`},
    {img:image2,title:'Service Title'
     ,text:`Tempor nisi mollit officia laborum nostrud ad nisi quis voluptate. 
    Lorem consectetur veniam nisi ipsum enim do. Id veniam elit velit nostrud labore mollit Lorem.`}
]
export const Services =()=>{



    return (
        <div className="servicesContainer">
             <div className="differBackground"></div>
             <div className="imagesHolder">
                {arr.map((ele:obj,index:number)=>{
                    if (index %2 ===0){

                     return ( <Holder key={index} img={ele.img} text={ele.text} title={ele.title} leftDir={true} />)
                    }
                    return (<Holder key={index} img={ele.img} text={ele.text} title={ele.title} leftDir={false} />)
                })}
             </div>
        </div>
    )
}

import Arch from '../../images/homepage2/icon-architecture.png'
import Inter from '../../images/homepage2/icon-interiors.png'
import Planning from '../../images/homepage2/icon-planing.png'
import {Variants,motion} from 'framer-motion'
import {Service} from './service'
import {useTranslation} from 'react-i18next'
let txt = `For each project we establish relationships with partners who we know will help 
us create added value for your project. As well as bringing together the public 
and private sectors, we make sector-overarching links to gather knowledge and to 
learn from each other. The way we undertake projects is based on permanently applying 
values that reinforce each other: socio-cultural value, experiental value, 
building-technical value and economical value. 
This way of working allows us to raise your project to a higher level.`
let txt1 =` When it comes to displaying and advertising your products in a flexible and effective way, 
3d visualization will be your best choice. To make sure the results will meet our clients' needs, 
we start from the blueprints and sketches, this step-by-step process ensures that 
we communicate well to reach a perfect visual simulation of the product even if it is still in the design
 and development phase. We specialize in preparing static 3d illustration, 3d animation
 , 360° panorama and virtual walks.
We have provided our services to various companies in the fields of architecture, buildings, 
landscape architecture, spatial planning, housing development, interior design, engineering and 
furniture production. 
`
let txt2 = `
Our mission is to provide services in the field of 3d visualization for architecture,
 advertising and technical studies in high quality that fully satisfies our clients. 
 To make this possible, we have been working persistently to develop our skills. 
 Thanks to the high qualifications of our creative 3d artists, and 
 the vast experience of our team members,
 we are able to create projects that meet our clients' expectations and needs.
`
let txt3 = `
Our goal is to provide companies, large institutions and individual clients 
with photoreal product presentations using advanced 3d technology and best practices. 
Because we are passionate about our craft,
 we are always enthusiastic about delivering the best possible results to our clients.
`
let arr= [{img:Arch,title:'About us',txt:txt1}
,{img:Inter,title:'Our mission',txt:txt2}
,{img:Planning,title:'Our goal',txt:txt3}]
export const OurServices = ()=>{
       const {t,i18n}=useTranslation()

    return (
        <div className="ourServicesContainer">
            <h3><span>About</span> Us</h3>
            <div className="ourServices">
                {arr.map((ele:{img:string,title:string},index)=>{
                    return (<Service img = {ele.img} 
                                    title={ele.title} 
                                    key={index} 
                                    custom={index}
                                    text={txt}/>)
                })}
            </div>
        </div>
    )
}
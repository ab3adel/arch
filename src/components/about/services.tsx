
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
let arr= [{img:Arch,title:'Title1'},{img:Inter,title:'Title2'},{img:Planning,title:'Title3'}]
export const OurServices = ()=>{
       const {t,i18n}=useTranslation()

    return (
        <div className="ourServicesContainer">
            <h3><span>{t('Our')}</span> {t('Services')}</h3>
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
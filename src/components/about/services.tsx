
import Arch from '../../images/homepage2/icon-architecture.png'
import Inter from '../../images/homepage2/icon-interiors.png'
import Planning from '../../images/homepage2/icon-planing.png'
import {Variants,motion} from 'framer-motion'
import {Service} from './service'
import {useTranslation} from 'react-i18next'
import {Skeleton} from '@mui/material'
import {iData} from '../../tools/interfaces'
interface iProps {loading:boolean,error:boolean,data:iData[]}
let arr= [{img:Arch,title:'About us',txt:'txt1'}
,{img:Inter,title:'Our mission',txt:'txt2'}
,{img:Planning,title:'Our goal',txt:'txt3'}]
export const OurServices = ({loading,error,data}:iProps)=>{
       const {t,i18n}=useTranslation()

    return (
        <div className="ourServicesContainer">
            <h3><span>About</span> Us</h3>
            <div className="ourServices">
                {loading || error? 
                arr.map((ele,index)=>{
                    return (
                        <Skeleton 
                        height={"30%"}
                      width={"30%"} 
                      animation={'pulse'}
                      sx={{bgcolor:'grey.400'}}
                      variant="rectangular" 
                      />
                    )
                })
             :
                data.map((ele,index)=>{
                    return (<Service img = {'http://backend.test.ikoniks.de/'+ele.attachment} 
                                    title={ele.title.en} 
                                    key={index} 
                                    custom={index}
                                    text={ele.body.en}
                                    />)
                })}
            </div>
        </div>
    )
}
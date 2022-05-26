import './services.scss'

import image1 from '../../images/back2.jpg'
import image2 from '../../images/back3.jpg'
import {Holder} from  './holder'
import {useGetCategoryQuery} from '../../store/services/query'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {PortfolioList} from '../portfolio/imagelist'
import {Notification} from '../../tools/notification/notification'
import {CircularProgress} from "@mui/material"
import {useTranslation} from 'react-i18next'
interface obj {img:string,body:{en:string,ar:string},title:{ar:string,en:string}}
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
 interface iTxt {[key:string]:string}
 interface iNodes {nodes:any[]}
 interface iCategory {nodes:any[]}

export const Services =()=>{
const {t,i18n}=useTranslation()
const {isLoading,data,isSuccess,isError}=useGetCategoryQuery(2)
const [imgsArr,setImgsArr]=useState<string[]>([])
const [open,setOpen]=useState(false)
let {id} = useParams()
let[ requiredData ,setRequiredData]= useState([{img:'',body:{en:'',ar:''},title:{ar:'',en:''}}])

let [txts,setTxts]=useState<string []>([])
let iterator =[1,2,3,4]


useEffect (()=>{
   
if (isSuccess && data) {
    let imgsArray : any[]=[]
    let category = data.payload.filter(ele=>ele.id === Number(id))[0] as iCategory
   let textsArr= category.nodes.filter(ele=>ele.title.en === 'text').map((ele:any)=>{
       if (i18n.language=== 'gr'){
           return ele.body.gr
       }
       else {
           return ele.body.en
       }
   })
   let array= category.nodes.filter(ele=>ele.title.en !== 'text')
                                 .map(ele=>{

                                            if (ele.attachment) {
                                                imgsArray.push( 'http://backend.test.ikoniks.de/'+ele.attachment)
                                            }
                                            if (ele.background) {
                                                imgsArray.push('http://backend.test.ikoniks.de/'+ele.background)
                                            }        })              
setImgsArr(imgsArray)                                   
setTxts(textsArr)

   
}
if (isError) {
    setOpen(true)
}
},[isLoading])


    return (
        <div className="servicesContainer">
             <div className="differBackground"></div>
            {isError ? 
            <CircularProgress size={50} sx={{position:'absolute',left:"50%",top:"50%"}} />:
             <>
             
             <div className="imagesHolder">
                {
                txts.map((ele:string,index:number)=>{

                        if (index %2 ===0){
    
                         return ( <Holder key={index} 
                            isLoading={isLoading}
                            img={ imgsArr[index] } 
                            text={ele} 
                            title={requiredData[0].title.en} 
                            leftDir={true} />)
                        }
                        return (<Holder key={index} 
                            isLoading={isLoading}
                            img={ imgsArr[index] } 
                            text={ele} 
                            title={requiredData[0].title.en} 
                            leftDir={false} />)
                    
                })}
             </div>
             <div className="serviceImages">
                 <PortfolioList images={imgsArr}/>
             </div>
             </>}
             <Notification message="something wrong happend" 
            show={open} 
            handleClose={()=>setOpen(false)}
            severity={'error'}
            />
        </div>
    )
}
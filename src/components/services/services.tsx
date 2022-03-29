import './services.scss'
import image from '../../images/back1.jpg'
import image1 from '../../images/back2.jpg'
import image2 from '../../images/back3.jpg'
import {Holder} from  './holder'
import {useGetSectionQuery,useGetNodeQuery} from '../../store/services/query'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
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
export const Services =()=>{
const {isLoading,data,error} =useGetNodeQuery(3)
let id = useParams()
let[ requiredData ,setRequiredData]= useState([{img:'',body:{en:'',ar:''},title:{ar:'',en:''}}])

let [txts,setTxts]=useState<iTxt>({
    txt1:'',txt2:'',txt3:'',txt4:''
})
let iterator =[1,2,3,4]
useEffect (()=>{
    
if (!isLoading) {
    let theData=(data as any).payload.filter((ele : any)=>ele.id=== Number(id.id?.substring(1)))
    let totalTxt = theData[0].body.en.split(",")
    let factor = Math.floor(totalTxt.length/4 )
    let txt1=totalTxt.slice(0,2 * factor).join()
   let txt2= totalTxt.slice(factor,2 * factor).join()
   let txt3 = totalTxt.slice(2*factor,3*factor).join()
    let txt4 = totalTxt.slice(3*factor,4*factor).join()

    setRequiredData(theData)
    setTxts(pre=>({...pre,txt1,txt2,txt3,txt4}))
}
},[isLoading])


    return (
        <div className="servicesContainer">
             <div className="differBackground"></div>
             <div className="imagesHolder">
                {
                iterator.map((ele:number,index:number)=>{

                        if (index %2 ===0){
    
                         return ( <Holder key={index} 
                            isLoading={isLoading}
                            img={image2} 
                            text={txts[`txt${ele}`]} 
                            title={requiredData[0].title.en} 
                            leftDir={true} />)
                        }
                        return (<Holder key={index} 
                            isLoading={isLoading}
                            img={image2} 
                            text={txts[`txt${ele}`]} 
                            title={requiredData[0].title.en} 
                            leftDir={false} />)
                    
                })}
             </div>
        </div>
    )
}
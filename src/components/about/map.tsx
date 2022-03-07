import { useState } from 'react'
import map from '../../images/about/map.png'
import {Location} from './location'
interface iCountry {[key:string]:string|boolean}

export const Map = () => {
const [countries,setCountries]=useState<iCountry[]>([
    {name:'Syria',top:'50%',left:'50%',show:false},
    {name:'Jordan',top:'10%',left:'10%',show:false},
    {name:'Germany',top:'30%',left:'40%',show:false},
    {name:'USA',top:'10%',left:'70%',show:true}

])
const handleMarkInfo=(countryName:string)=>{
    let newObj= [...countries]
    newObj.forEach((ele)=>{
        if (ele['name']=== countryName) {
            ele['show']=true
        }
        else {
            ele['show']=false
        }
    })
    setCountries(newObj)
}

    return (
        <div className="mapContainer">
            <h3>We are world <span>wide</span></h3>
            <div className="mapImageContainer">
                <img src={map} />
            {countries.map((ele:iCountry,index:number)=>{
                return (
                    <Location 
                    key={index}
                    setShowInfo={handleMarkInfo}
                    country={ele['name'] as string}    
                    top={ele['top'] as string} 
                    left={ele['left'] as string} 
                    showInfo={ele['show'] as boolean}/>
                )
            })}  
            
            </div>
            </div>
    )
}
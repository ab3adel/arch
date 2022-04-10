import './about.scss'
import {useTranslation} from 'react-i18next'
import {OurServices} from './services'
import {Map} from './map'
import {useGetNodeQuery} from '../../store/services/query'
import CircularProgress from  '@mui/material/CircularProgress/CircularProgress'
import { useEffect, useState } from 'react'
import {iData} from '../../tools/interfaces'
import Arch from '../../images/homepage2/icon-architecture.png'
import {Notification} from '../../tools/notification/notification'
 const About =() =>{
     const [theData,setTheData]= useState<iData[]>([{title:{en:''},body:{en:''},attachment:Arch}])
     const {t,i18n} = useTranslation()
     const {isLoading,isError,data}= useGetNodeQuery(8)
     const [open,setOpen]=useState(false)

useEffect (()=>{
if (!isLoading && !isError) {
setTheData((data as  any).payload)
}
if (isError) {
    setOpen(true)
}
},[isLoading])

    return (
        <div className="aboutContainer">
            <h2>About 3D.IKONKS</h2>
            <div className="aboutIntro">
           { i18n.language ==="en"?<h4> We Turn Ideas Into Art Of Works<span>.</span></h4>:
           <h4><span>.</span> نحول الأفكار الى فن</h4>}
                <p>
                    For each project we establish relationships with partners who we know will help 
                    us create added value for your project. As well as bringing together the public 
                    and private sectors, we make sector-overarching links to gather knowledge and to 
                    learn from each other. The way we undertake projects is based on permanently applying 
                    values that reinforce each other: socio-cultural value, experiental value, 
                    building-technical value and economical value. 
                    This way of working allows us to raise your project to a higher level.
                </p>
            </div>
           { isLoading|| isError ?
           <CircularProgress size={50}  />:
           <OurServices data={theData} loading={isLoading} error={isError}  />}
            <Map />
            <Notification message="something wrong happend" 
            show={open} 
            handleClose={()=>setOpen(false)}
            severity={'error'}
            />
        </div>
    )
}
export default About;

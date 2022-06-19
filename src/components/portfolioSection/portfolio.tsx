import './portfolio.scss'
import 
{
    Grid,
}
from '@mui/material'
import {useGetCategoryQuery} from '../../store/services/query'
import { useEffect,  useState } from 'react'
import {Outlet} from 'react-router'
import {Inspector} from './inspector'
import { LoadingPage } from '../../tools/loadingpage/loadingpage'


const  Portfolio=()=>{
   

    const [inspectorOptions,setInspectorOptions]=useState({open:false,img:""})


return (
    <div className="portfolioSectionContainer">
        <Grid container 
              direction={'column'} 
              rowSpacing={2} 
              rowGap={2}
             
              >
            <Grid 
               item 
               container 
               className="portfolioHeader flexBox headerWithImage"
               direction={"column"}
               xs={5} 
                >
                
                    <h1>3D Ikoniks Portfolio</h1>
               
            </Grid>
            
                <Outlet />
           
            
        </Grid>
             <Inspector open={inspectorOptions.open} 
                       setOpen={()=>setInspectorOptions(pre=>({...pre,open:false}))} 
                       imgSrc={inspectorOptions.img}/>


    </div>
)

}
export default  Portfolio;
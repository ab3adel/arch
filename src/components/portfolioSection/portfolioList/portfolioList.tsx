import './portfolioList.scss'
import {Grid,Tab,Tabs,CircularProgress} from '@mui/material'
import {Holder} from './holder'
import {TabPanel} from './tabPanel'
import img1 from '../../../images/portfolio/1.jpg'
import {useGetCategoryQuery} from '../../../store/services/query'
import { useEffect,  useState } from 'react'
import {useTranslation} from 'react-i18next'
import { LoadingPage } from '../../../tools/loadingpage/loadingpage'
interface iSection {name:string,nodes:any[]}
let imgsArr: string[]=[img1,img1,img1,img1,img1,img1]


export const PortfolioList =() =>{
   const [value,setValue]=useState(0)
   const {isLoading,data,isSuccess} =useGetCategoryQuery(3)
    const [isFinished,setIsFinished] =useState(true)
    const {i18n} =useTranslation()
    const [sections,setSections]=useState<iSection[]>([{name:'',nodes:[]}])
const handleChange =(e:React.SyntheticEvent<Element,Event>,newValue:number) =>{
    setValue(newValue)
}
useEffect (()=>{
if (isSuccess && data) {
 
   let newSections =data.payload.map ((ele:any) => {
      let headImgs = ele.nodes.filter ((ele:any)=>ele.title.en.includes('head')).
                              map((ele:any)=>'http://backend.test.ikoniks.de/'+ele.attachment)
        if (i18n.language === 'en') {
          return {name: ele.name.en,nodes:ele.nodes,id:ele.id,headImgs}
        }
        else  {
            return {name: ele.name.gr,nodes:ele.nodes,id:ele.id,headImgs}
        }
    })
    
    setSections(newSections)
    
}
console.log(data)
},[isSuccess,isLoading])

    return (
        <Grid item container 
        xs ={12} 
        spacing={2}
        padding={4}
        >
            <Grid item container xs={12}>
            <Tabs value={value} 
                   onChange={handleChange} 
                   sx={{
                        width:'100%'
                        ,'& .MuiTabs-flexContainer':{
                            display:'flex'
                        ,justifyContent:'space-evenly'
                        ,'& .MuiButtonBase-root' : {
                            textDecoration:'none'
                            ,color:'white'
                        },
                    }
                   , '& .MuiTabs-indicator ': {
                        background:'rgb(184, 184, 31)'
                    }
                        }}
                   >
                    
                    {
                        sections.map((ele:any,num:number)=> <Tab label={ele.name} key={num} />)
                    }
            </Tabs>
                
            </Grid>
            <Grid item container  
                xs ={12} 
                spacing={4}
                padding={4}>
                    {
                       sections ? sections.map((ele:any,index:number)=>{
                            return (
                                <TabPanel value={value} index={0} >

                                    {ele && ele.headImgs?
                                    ele.headImgs.map((img:string,index:number)=>{

                                        return (
                                            <Holder imgSrc={img} 
                                                    key={index} 
                                                    section={sections[value].name} 
                                                    slug={`${ele.id}/project${index}`}
                                                    />
                                        )
                                    }):  
                                    <CircularProgress size={50} 
                                    sx={{position:'absolute',left:"50%",top:"50%"}} />
                                }
                                </TabPanel>
                            )
                        })
                    :
                    <CircularProgress size={50} 
                        sx={{position:'absolute',left:"50%",top:"50%"}} />
                    }
                
        </Grid>
        {isLoading && (
                <LoadingPage
                 isFinished={isLoading}
                 setIsFinished={setIsFinished}
                 images={[]}/>
            )}
        </Grid>
    )
}
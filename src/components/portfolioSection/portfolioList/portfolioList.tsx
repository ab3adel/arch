import './portfolioList.scss'
import {Grid,Tab,Tabs,CircularProgress} from '@mui/material'
import {Holder} from './holder'
import {TabPanel} from './tabPanel'
import img1 from '../../../images/portfolio/1.jpg'
import {useGetCategoryQuery,useGetSectionQuery} from '../../../store/services/query'
import React, { ReactElement, useEffect,  useState } from 'react'
import {useTranslation} from 'react-i18next'
import { LoadingPage } from '../../../tools/loadingpage/loadingpage'
import {TabIcon} from './icon'
import PortfolioDetails from '../../portfolio/portfolio'

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
const handleTab= (e:React.MouseEvent,num:number,id:number)=>{
   setValue(num)

}
useEffect (()=>{
if (isSuccess && data) {

let allNodes:any[]=[]
   let newSections =data.payload.map ((ele:any) => {
      let headImgs = ele.nodes.filter ((ele:any)=>ele.title.en.includes('head')).
                              map((ele:any)=>{
                                  let projectName = ele.title.en.split('-')[0]
                                 return ({attachment:'http://backend.test.ikoniks.de/'+ele.attachment,projectName})
                              }
                                   )
        if (ele.nodes.length>2){
           
                allNodes= allNodes.concat(ele.nodes.slice(2))                     
             } 
        if (ele.nodes.length<2 && ele.nodes.length >0) {
            allNodes=allNodes.concat(ele.nodes)
        }                          
        if (i18n.language === 'en') {
          return {
            name: ele.name.en
            ,nodes:ele.nodes
            ,id:ele.id
            ,headImgs
            ,sectionImage:'http://backend.test.ikoniks.de/'+ele.attachment
        }
        }
        else  {
            return {
                name: ele.name.gr
                ,nodes:ele.nodes
                ,id:ele.id
                ,headImgs 
                ,sectionImage:'http://backend.test.ikoniks.de/'+ele.attachment
            }
        }
    })
   
    newSections=[{name:'All',nodes:allNodes,id:-1,headImgs:null,sectionImage:''},...newSections]
    setSections(newSections)
}

},[isSuccess,isLoading])

    return (
        <Grid item container 
        xs ={12} 
        spacing={2}
        padding={4}
        className={'portfolioListSection'}
        rowGap={6}
        >
            <Grid item container xs={12}
             >
                <Tabs value={value} 
                    onChange={handleChange} 
                    className="tabsCustomized"
                    sx={{
                            width:'100%'
                            ,'& .MuiTabs-flexContainer':{
                                display:'flex'
                            ,justifyContent:'space-evenly'
                            ,'& .MuiButtonBase-root' : {
                                textDecoration:'none'
                                ,color:'white',
                                flex:1,
                                fontSize:'1.1em'
                            },
                            '& .MuiGrid-root': {
                                '& img' :window.innerWidth > 500 ?{
                                    width: '100px',
                                    height:'79.5px'
                                
                                }: {
                                    width:'45px',
                                    height:'40px'
                                }
                                ,
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'space-between',
                                cursor:'pointer'
                            }
                        }
                    , '& .MuiTabs-indicator ': {
                            background:'transparent'
                        }
                            }}
                    >
                        
                        {
                            sections.map((ele:any,num:number)=> {
                                return (
                        
                                    <Grid item xs={3} 
                                    key={num}
                                    className={num === value ? 'selectedTab':''}
                                    onClick={(e:React.MouseEvent)=>handleTab(e,num,ele.id)}>
                                        {ele.sectionImage &&(<img src={ele.sectionImage} />)}
                                        <Tab label={ele.name} tabIndex={num}/>
                                    </Grid>
                                    
                                )
                        })
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
                                <TabPanel value={value} index={index} key={index}>

                                    {/* {ele && ele.headImgs?
                                    ele.headImgs.map((node:{attachment:string,projectName:string},index:number)=>{

                                        return (
                                            <Holder imgSrc={node.attachment} 
                                                    key={index} 
                                                    section={sections[value].name} 
                                                    slug={`${ele.id}/${node.projectName}`}
                                                    />
                                        )
                                    }):  
                                    <CircularProgress size={50} 
                                    sx={{position:'absolute',left:"50%",top:"50%"}} />
                                } */}
                                     <PortfolioDetails nodes={ele.nodes} />
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
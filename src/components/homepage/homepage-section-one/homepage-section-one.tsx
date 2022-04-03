import './homepage-section-one.scss'
import {NavLink} from 'react-router-dom'
import {motion,Variants, useAnimation} from 'framer-motion'
import 
{
    ArrowRightAlt,
    Instagram,
    Twitter,
    Telegram,
    Facebook,
    ArrowLeftOutlined,
    ArrowRightOutlined
    
} 
from '@mui/icons-material'
import {useState,useEffect, useRef} from 'react'
import testImg1 from '../../../images/slide1.jpg'
import testImg2 from '../../../images/slide2.jpg'
import testImg3 from '../../../images/slide3.jpg'
interface iEle {i:number,shift:number,left:number}
interface iCustom {i:number,shift:number,index:number,order:number}
interface iProps {testImg1:string,testImg2:string,testImg3:string}
let imgsArr =[testImg1,testImg2,testImg3]
const main:Variants = {
  first:(custom:iCustom) =>({
    backgroundImage:`url(${imgsArr[custom.index]})`,
  }),
    second :(custom:iCustom) =>({
      backgroundImage:`url(${imgsArr[custom.index]})`,
    
      transition:{
        when:"beforeChildren",
        duration:1.5,
        ease:'easeInOut' ,
        backgroundImage : {
          delay:1,
          duration:1
        },
       
     
      },
    })
  }
  
  const childTopMost:Variants = {
    first :( custom:iCustom)=>({ 
      backgroundImage:`url(${imgsArr[custom.index===0? 2:custom.index-1 ]})`,
      opacity:0,
      
    }),
    second : (custom:iCustom) =>({
     border:'1px solid transparent',
     backgroundImage:`url(${imgsArr[custom.index===0? 2:custom.index-1 ]})`,
     opacity:[0,1,0],
     backgroundPositionX:[`${custom.i}%`,custom.i >40 ? `${custom.i - custom.shift }%`: `${custom.i + custom.shift }%`],
      transition : {
        duration:1,
        ease:'easeOut',
        opacity: {
          delay:0.5 +custom.i/200,
          duration:1
        },
        backgroundPositionX:{
          delay:0.5+custom.i/200,
          duration:1
        },
      

      },
     
    })
  }

const title:Variants= {
  first: {
   x:"100vw",
    rotateZ:0
  },
  second:i=>( {
  rotateZ:[0,45,0],
  y:[0,100,0],
  x:[0,0,700,0],
  opacity:[1,0,0,1],
    transition:{
      duration:3,
      ease:'easeInOut',
      y:{
        duration:2,
        ease:'easeIn',
       
      },
      rotateZ :{
        delay:2.5,
        duration:1,
        ease:'linear'
      },
      opacity:{
        duration:3,
    
      },
    }
  })
}
const paragraph:Variants= {
  first: {
    y:-50,
    opacity:0
  },
  second :() => ({
    y:[50,0],
    opacity:[0,1],
    transition: {
      duration:2,
    
    }
  })
}
const button:Variants = {
  first :{
    y:50,
    opacity:0
  },
  second :{
    opacity:[0,1],
    y:[50,0],
    transition:{
      duration:2,
      delay:0.5
      
    }
  }
}
const testChild:Variants ={
  second : (custom:iCustom) =>({
    backgroundImage:`url(${imgsArr[custom.index]})`,
      backgroundPositionX:['0%',`${custom.i}%`],
      backgroundPositionY:'40%',

      opacity:[.7,0],
      transition: {
        duration:3.5,
        delay:1.5,
       backgroundPositionX: {
         delay:1+custom.order/10,
         //duration:0.5+custom.order/10
       },
       opacity:{
         duration:2 -custom.order/10
       },
       backgroundPositionY:{
         duration:1
       }
      }
   })
}
export const HomePageSectionOne= ( ) =>{
 
  const [vals,setVals] =useState(
    [
        {left:87.5,shift:100,i:100}, 
        {left:75,shift:80,i:89.5} ,
        {left:62.5,shift:40,i:63.5} ,
        {left:50,shift:20,i:59.5} 
        ,{left:37.5,shift:12.5,i:40.5} 
      ,{left:25,shift:10,i:20}
      ,{left:12.5,shift:5,i:10} 
    ,{left:0,shift:0,i:-2}
    ],
    // [
    //     {left:87.5,shift:12.5,i:100}, 
    //     {left:75,shift:12,i:84} ,
    //     {left:62.5,shift:-5,i:71} ,
    //     {left:50,shift:-5,i:55} 
    //     ,{left:37.5,shift:0,i:48} 
    //   ,{left:25,shift:5,i:41}
    //   ,{left:12.5,shift:10,i:36} 
    // ,{left:0,shift:12,i:12.5}
    // ],
  
 
)
const [texts,setTexts]=useState({title:[
  '3','D','','.','I','K','O','N','I','K','S','','D','E','S','I','G','N'
],
paragraph:['Occaecat adipisicing ea in voluptate ut elit commodo Nisi magna cupidatat est labore Lorem.',
` Qui ex ex incididunt laborum qui occaecat aliquip cupidatat excepteur 
laborum consequat cillum. Culpa incididunt aute velit cillum laborum in labore `,
`ipsum consequat tempor consequat officia. Non laboris sit irure velit. In Lorem 
velit deserunt fugiat incididunt ad consectetur exercitation.`]
})
let [index,setIndex]=useState(0)
let [autoAnimate,setAutoAnimate]=useState(true)

const controlChild= useAnimation ()
const controlChildTopMost = useAnimation()
const controlMain= useAnimation()
const controlTitle= useAnimation()
const controlParagraph= useAnimation()
const controlButton = useAnimation()
const controlFakeMain=useAnimation()


useEffect(()=>{
  
  let intervals = setInterval(()=>{
    sliderAnimation('next')
   
  },12000)
  if (!autoAnimate) {
    clearInterval(intervals)
  }
return ()=> clearInterval(intervals)
},[autoAnimate,index])

useEffect (()=>{
sliderAnimation('next')
},[])

useEffect(()=>{
if (window.innerWidth <1024){
  handleMobileViewAnimation()
 }

},[])
const handleMobileViewAnimation= () =>{
  let step = 5
  let prev=35;
  let newVals=[]
  let left= 0
  if (window.innerWidth >510) step=10
  for (let index =0;index<5;index++ ) {
    
    newVals.push({i:prev,shift:step,left})
    prev+=step
   
    left+=20
  }
  setVals(newVals)

}
const sliderAnimation =(str:string)=>{
   let i= index
    if (str === 'next') {
      if (i<2) setIndex(pre=> pre+1)
      else setIndex(0)
     
    }
    else {
      if (i >0)setIndex(pre=>pre-1) 
      else setIndex(2)
    }
  
/*setTimeout(()=>{
  titleDiv.style.visibility='hidden';
},1500)*/

    controlChild.start('second')
   controlChildTopMost.start('second')
    controlMain.start('second')
    controlTitle.start('second')
    controlParagraph.start('second')
    controlButton.start('second')
    controlFakeMain.start('second')
  
  }
const animateManually =(str:string)=>{
  setAutoAnimate(false)
  sliderAnimation(str)
}

    return (
        <div className="homepageOneContainer">
            <div className="leftCol">
                <div className="blackBox">
                   <div className="goArch">
                     <p>3D</p>
                     <p className="dot">.</p>
                     <p>Ikoniks</p>
                   </div>
                  
                   <div className="counter">
                     <p className="currentCounter">0{index +1}</p>
                     <p>/<span>&nbsp;</span>03</p>
                   </div>
                 </div>
                 <div className="shadowArch">
                     arch
                   </div>
                <div className="iconsGroup">
                    <Facebook color="inherit" fontSize='inherit'/>
                    <Telegram color="inherit" fontSize="inherit" />
                    <Twitter color="inherit" fontSize='inherit' />
                    <Instagram color="inherit" fontSize='inherit' />
                </div>
            </div>
            <motion.div className="rightCol" 
              variants={main} 
              animate={controlMain}
              initial="first" 
              custom={{...vals[0],index}}>
                  
                 <div className="arrows">
                   <div className="previousArrow"  onClick={()=>animateManually('prev')}>
                     <ArrowLeftOutlined color='inherit' fontSize='inherit'/>
                     <p>prev</p>
                   </div>
                   <div className="nextArrow"  onClick={()=>animateManually('next')}>
                     <p>Next</p>
                     <ArrowRightOutlined color='inherit' fontSize='inherit'/>
                   </div>
                 </div>
                 <div className="animationContainer">
                   { 
                     vals.map((ele:iEle,i:number)=>
                    {
                       return (
                              <motion.div
                                key={i}
                                custom={  
                              {  i:ele.i,index,shift:ele.shift,order:i}
                            }
                                style={{left:`${ele.left}%`}}
                                className="animatedInterface"
                                variants={testChild} 
                                initial='first'
                                animate={controlChild}>
                              </motion.div>
                                          )
                     }
                      
                     )
                   }
                    <div className="animationContainerTopMost">
                  { 
                     vals.map((ele:iEle,i:number)=>
                     {

                       return (
                        <motion.div
                          key={i}
                          custom={{i:ele.i,index,shift:ele.shift}}
                          style={{left:`${ele.left}%`}}
                          className="animatedInterface"
                          variants={childTopMost} 
                          initial='first'
                          animate={controlChildTopMost}>
                        </motion.div>
                       )
                     }
                      
                     )
                   }
                  </div>
                  </div>
                 
                <div className="homepageOneHeader">

                  <div className="headerPhoneNumber">
                         +7 (212) 674-25-10
                  </div>
                  <div className="navLinks">
                    <NavLink  to={'/'}>HOME</NavLink>
                    <NavLink to={'/about'}>ABOUT US</NavLink>
                    <NavLink to={'/portfolio'}>PORTFOLIO</NavLink>
                    <NavLink to={'/blogs'}>BLOG</NavLink>
                    <NavLink to={'/contacts'}>CONTACTS</NavLink>
                  </div>
                
                </div>
                <div className="homepageOneBody">
                    <motion.div className="animatedTitle">
                      {texts.title.map((ele:string,i:number)=>{
                        if (!ele) return <span key={i}>&nbsp;&nbsp;</span>
                        return ( <motion.p 
                                  key={i}
                                  variants={title}
                                  custom={i}
                                  initial='first'
                                  animate={controlTitle}
                                   >
                                       {ele}
                                  </motion.p>)
                      })}
                     
                    </motion.div>
                    <motion.div className="animatedParagraph">
                      
                             <>
                              <motion.p
                              
                               variants={paragraph}
                                initial='first'
                                animate={controlParagraph}>
                               {texts.paragraph[index]}
                              </motion.p>
                            
                              </>

                              
                    </motion.div>
                    <motion.button
                     className='lookMoreBtn' 
                     variants={button}  
                     initial="first"
                     animate={controlButton}
                   >
                     
                        Look More
                        <ArrowRightAlt 
                      
                        fontSize='inherit' color='inherit'/>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
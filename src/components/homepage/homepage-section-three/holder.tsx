import Zoom from '../../../images/homepage3/zoom.png'
import {motion,Variants,useAnimation} from 'framer-motion'
import { useEffect,useRef, useState } from 'react'


export interface iProps {imgSrc:string
    ,title:string
    ,verticalTitle:string
    ,navigateTo:Function
    ,to:number
    ,shortText:string
}

const img:Variants= {
    first:{
        backgroundSize:'100%'
        
    },
    second:{
        backgroundSize:['100%','120% '],
        opacity:[0.5,1],
        transition:{
            duration:3,
            ease:'easeInOut'
        }
    },
    third:{
       backgroundSize:['120%','100%'],
        opacity:[1,0.5],
        transition:{
            duration:1
        }
    }
}
const zoom:Variants= {
    first:{
        opacity:0,
        
    },
    second :{
        opacity:[0,1],
        scale:[1,2],
        transition:{
            duration:3,
            ease:'easeInOut'
        }
    },
    third: {
        opacity:[1,0],
        scale:[2,1],
        transition:{
            duration:1
        }

    }
}
const shortDescription:Variants= {
    first:{
        opacity:0,
        
    },
    second :{
        opacity:[0,1],
        //width:['0%','100%'],
        fontSize:['0rem','1rem'],
        transition:{
            duration:3,
            ease:'easeInOut'
        }
    },
    third: {
        opacity:[1,0],
       // width:['100%','0%'],
       fontSize:['1rem','0rem'],
        transition:{
            duration:1
        }

    }
}
const titleVariant:Variants = {
    first :{
        y:0,
        opacity:1,
    },
    second:{
        y:[0,-50],
        opacity:[1,0],
        transition:{
            duration:1,
            ease:'easeInOut'
        }
    },
    third: {
        y:[-50,0],
        opacity:[0,1],
        transition:{
            duration:1
        }
    }
}
const verticalTitleVariant:Variants= {
    first : {
        y:0,
        opacity:1
    },
    second : (i:number)=>({
        x:i> 5? 50 : -50,
        opacity:[1,0],
        transition:{
            duration:1,
            ease:'easeInOut',
            opacity:{
                delay:0.5
            }
        }

    }),
    third : {
        x:0,
        opacity:[0,1],
        transition:{
            duration:0.5,
            ease:'easeInOut'
        }

    }
}

export const Holder =({imgSrc,title,verticalTitle,navigateTo,to,shortText}:iProps)=>{
let arrWords=['A','R','C','H','I','T','E','C','T','U','R','E']
const controlImg=useAnimation()
const controlZoom =useAnimation()
const controlTitle =useAnimation()
const controlVerticalTitle =useAnimation()
const controlShortDescription= useAnimation()

const startAnimationHandler =()=>{
    controlImg.start('second')
    controlZoom.start('second')
    controlTitle.start('second')
    controlVerticalTitle.start('second')
    controlShortDescription.start('second')
}
const stopAnimationHandler = ()=>{
    controlImg.start('third')
    controlZoom.start('third')
    controlTitle.start('third')
    controlVerticalTitle.start('third')
    controlShortDescription.start('third')
}

    return (
        <motion.div className="holderContainer" 
        onMouseOver={()=>startAnimationHandler()}
        onMouseLeave={()=>stopAnimationHandler()}
        onClick={()=>navigateTo(to)}
        >
            <motion.div className="imageHolder"
              variants={img}
              initial='first'
              animate={controlImg} style={{backgroundImage:`url(${imgSrc})`}}>
               
            </motion.div>
            <motion.div className='holderZoom'
            variants={zoom}
            initial='first'
            animate={controlZoom}>
                <img src={Zoom}/>
            </motion.div>
            <motion.div className="holderShortDescription"
           variants={shortDescription}
            initial='first'
            animate={controlShortDescription}>
                <div>

                    {shortText}
                </div>
            </motion.div>
            <motion.div className='holderForeground'>
                <motion.div className='holderTitle'
                    variants={titleVariant}
                    initial='first'
                    animate={controlTitle}>
                        <p>{title}</p>
                </motion.div>
                {/* <motion.div className='holderVerticalTitle'>
                   {arrWords.map((ele:string,i:number)=>{
                       return (<motion.p key={i}
                                 custom={i}
                                variants={verticalTitleVariant}
                                animate={controlVerticalTitle}
                                initial='first'>
                                {ele}
                              </motion.p>)
                   })}
                </motion.div> */}
            </motion.div>
        </motion.div>
    )
}

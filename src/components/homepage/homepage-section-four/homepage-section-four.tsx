import './homepage-section-four.scss'
import {motion,Variants,useAnimation} from 'framer-motion'
import { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import { Console } from 'console'
import {useTranslation} from 'react-i18next'
const image:Variants = {
    first :(i:number)=>
    
        ({
        backgroundPositionY: [`${i}%`,`${i+5}%`],

        transition:{
            duartion:1,
            ease:'easeIn',
            delay:0.5
        }
    }),
    second :(i:number)=>({
        backgroundPositionY:[`${i}%`,`${i-5}%`],
       
        transition:{
            duartion:1,
            ease:'easeIn',
            delay:0.5
        }
    })
    
}
const textVariant:Variants= {
    first :{
        x:100,
        opacity:0
    },
    second: {
        opacity:1,
        x:0,
        transition :{
            duration:3,
            ease:'easeInOut' 
        }
    }
}
export const HomepageSectionFour = () => {
    const controlImage = useAnimation()
    const {t,i18n} =useTranslation()
    const {ref,inView} =useInView()
    let [y,setY]=useState(0)
    let [backgroundPosition,setBackgroundPosition]=useState(0)
    const handleScroll = () =>{
        let div =  document.querySelector('.App') as HTMLDivElement
        let back =document.querySelector('.homepageFourBackground') as HTMLDivElement
        if (!back)  return
       let backPosition = Number(back?.style.backgroundPositionY.split('%')[0])
       setBackgroundPosition(backPosition)
       
        if (y <div.scrollTop) {
            setY(div.scrollTop)
            controlImage.start('second')
        }
        else {
            controlImage.start('first')
        }
    
    }
    useEffect(()=>{
    
     if (inView) {
        document.querySelector('.App')?.addEventListener('scroll',(e)=>handleScroll())
     }
     if (!inView) {
        document.querySelector('.App')?.removeEventListener('scroll',(e)=>handleScroll())
     }
    return ()=>{
        document.querySelector('.App')?.removeEventListener('scroll',(e)=>handleScroll())
    }
    },[inView,y])

    return (
        <div className="homepageFourContainer" ref={ref}>
            <motion.div className="homepageFourBackground"
              initial='first'
              animate={controlImage}
              variants={image}
              custom={!isNaN(backgroundPosition)?backgroundPosition:50}
              >
                 <div className="parallaxNumber">
                     12
                 </div>
            </motion.div>
            <motion.div className="homepageFourTitle"
            initial="first"
            whileInView={'second'}
            variants={textVariant}
           
            viewport={{once:true}}>
                {i18n.language ==="en"?
                <>
                <p>YEARS OF SUCCESSFUL WORK</p>
                IN THE MARKET
                </>
            :<>
            <p>سنوات من النجاح</p>
                في السوق
            </>
            }
            </motion.div>
        </div>
    )
}
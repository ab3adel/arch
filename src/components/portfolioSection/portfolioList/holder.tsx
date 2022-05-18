import { Grid } from "@mui/material"
import {motion,Variants,useAnimation} from 'framer-motion'
import {useNavigate} from 'react-router'
interface iProps {imgSrc:string,section:string}
const animatedPortfolio:Variants = {
    backgroundInitial:{
        backgroundSize:['110%','100%'],
        transition: {
            ease:'easeOut'
        }
    },
    backgroundAnimated :{
        backgroundSize:['100%','110%'],
        transition:{
            ease:'easeInOut',
            duration:1
        }
    },
    shadowInitial : {
        maxHeight:0,
        fontSize:0

    },
    shadowAnimated:{
        maxHeight:'100%',
        fontSize:'2em', 
        transition:{
            ease:'easeIn',
            delay:0.5,
        
        }

    }
    
}

export const Holder= ({imgSrc,section}:iProps)=>{
    const controlBackground = useAnimation()
    const controlShadow =useAnimation()
   const navigate= useNavigate()
    const hovered=()=>{
     
        controlBackground.start('backgroundAnimated')
        controlShadow.start('shadowAnimated')
    }
    const out=()=>{
    


    controlBackground.start('backgroundInitial')
    controlShadow.start('shadowInitial')

       
    }
    return (
        
        <Grid 
        className="portfolioListContainer"
        item 
        container 

        md ={4} sm ={6} xs ={12}
        onMouseEnter={()=>hovered()}
        onMouseLeave={()=>out()}
        onClick={()=>navigate(section)}
        onTouchStart={()=>hovered()}
        onTouchEnd ={()=>out()}
        >
                    
                <motion.div className='background-animated' 
                animate={controlBackground}
                variants={animatedPortfolio}
                initial={'backgroundInitial'}
                style={{backgroundImage:`url(${imgSrc})`}}
                        >
                    <motion.div
                
                    animate={controlShadow}
                    variants={animatedPortfolio}
                    className="shadow-background-animated">
                        <p>3D portfolio</p>
                        <p> [{section}]</p>
                    </motion.div>
                </motion.div>
    </Grid>
    )
}
import { Typography ,Grid} from '@mui/material'
import {Variants,useAnimation,motion} from 'framer-motion'

interface iProps {imgSrc:string,name:string,profession:string}

const holderVariant:Variants= {
    animateImage: {
        backgroundSize:['100%','105%']
    },
    initialImage:{
        backgroundSize:['105%','100%']
    },
    foreground :{
    
        opacity:1,
        transition:{
            ease:"backInOut",
        }
    },
    initialForeground :{
    
        opacity:0
    }

}
export const ImageHolder =({imgSrc,name,profession}:iProps)=>{
    const controlBack = useAnimation()
    const controlFront=useAnimation()
    
    const hover =()=>{
        controlBack.start('animateImage')
        controlFront.start('foreground')
    }
    const endHover =() =>{
        controlBack.start('initialImage')
        controlFront.start('initialForeground')
    }
    return (
 

            <Grid item 
                className="imageHolderContainer"
                onMouseEnter={()=>hover()}
                onMouseLeave={()=>endHover()}
                >
                <motion.div className="imageHolder" 
                    variants={holderVariant}
                 
                    animate={controlBack}
                    style={{backgroundImage:`url(${imgSrc})`}}>
                    <motion.div className="info"
                      variants={holderVariant}
                      animate={controlFront}
                     >
                        <p className="name">{name}</p>
                        <p className="plus"> +</p>
                        <p className="profession"> {profession}</p>
                    </motion.div>
                </motion.div>
            </Grid>
       
    )
}
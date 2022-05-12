import 
{Add} 
from '@mui/icons-material'
import React from 'react'
import {motion,Variants,useAnimation} from 'framer-motion'
import Grid from '@mui/material/Grid/Grid'
import {ImagePlaceHolder} from '../../tools/placeholder/imageplacehodler'



interface iProps {imgSrc:string,setInspectorOptions:Function}

const variant:Variants={
    forward:{
        display:'flex',
        rotateZ:[0,180],
        transition:{
            duration:2,
            ease:'circIn'
        }
    },
    backward:{
        display:'none',
        rotateZ:[180,0],
        transition:{
            duration:2,
            ease:'circIn'
        }
    },
    shadowForeground:{
       backgroundColor:'grey',
       backgroundBlendMode:'darken'

    },
    initialForeground:{
       backgroundColor:'transparent'
    }


    
}
export const ImageHolder = ({imgSrc,setInspectorOptions}:iProps) =>{
const controlZoom =useAnimation()
const controlForeground=useAnimation()
const handleHovering=(e:React.MouseEvent | React.TouchEvent)=>{

    let target = e.currentTarget as HTMLDivElement

target.classList.add('imageItemHovered')
controlZoom.start('forward')

}
const cancelHovering=(e:React.MouseEvent | React.TouchEvent)=>{
  
    let target = e.currentTarget as HTMLDivElement
    target.classList.remove('imageItemHovered')
    controlZoom.start('backward')
  
}

    return (
        <Grid 
            item 
            xs={12}
            sm={12}
            md={6}
            lg={6}

           
            className="limitedHeight "
            onMouseEnter={(e)=>handleHovering(e)}
            onTouchStart={(e)=>handleHovering(e)}
            onTouchEnd={(e)=>cancelHovering(e)}
            onMouseLeave={(e)=>cancelHovering(e)}>
                <motion.div className="imageItem"
                variants={variant}
                animate={controlForeground}
                >

                    <ImagePlaceHolder  
                            imgSrc={imgSrc} 
                            
                            setZoom={setInspectorOptions}
                            />
                    <motion.div
                    className='iconContainer'
                    variants={variant}
                    animate={controlZoom}
                    
                    >

                        <Add className='addIcon hiddenIcon'
                        onClick={()=>setInspectorOptions((pre:any)=>({...pre,open:true,img:imgSrc}))}
                        fontSize='inherit'
                        />
                    </motion.div>
                </motion.div>
             
                
        </Grid>
    )
}
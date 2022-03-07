
import {motion,useAnimation,Variants,} from 'framer-motion'
const paragraph:Variants = {
    initial:{
        opacity:0,
        y:150
    },
    animation : (i:number)=>({
        opacity:1,
        y:0,
        transition: {
            delay:0.5*i,
            ease:'easeOut',
            opacity:{
                duration:1.5
            },
            y :{
                duration:1.5
            }

        }
    })
}
export const Service = ({img,text,title,custom}:{img:string,text:string,title:string,custom:number})=>{

const control = useAnimation()

    return (
        <motion.div 
          variants={paragraph}
          custom={custom}
          whileInView={'animation'}
          viewport={{once:true}}
           initial="initial"
          className="serviceContainer">
            <div className="serviceImg">
                <img src={img}/>
                <h2>{title}</h2>
            </div>
            <p>
                {text}
            </p>

        </motion.div>
    )
}
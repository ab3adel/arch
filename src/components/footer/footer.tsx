import './footer.scss'
import {Input} from '../../tools/form/input/input'
import {TextArea} from '../../tools/form/textfield/textfield'
import {dummy,isEmail} from '../../tools/validations/validations'
import {motion ,Variants} from 'framer-motion'
import {ArrowRightAlt,Copyright} from '@mui/icons-material'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import {useAnimation} from 'framer-motion'
const btn:Variants = {
    first : {
        x:200
    },
    second : {
        x:0,
        opacity:[0,1],
        rotateZ:[0,-40,0,20,0,-10,0,10,0,-5,0,5,0],
        transition: {
            duration:1,
            
            rotateZ:{
                delay:1,
                duration:1
                
            }
        }
    }
}
export const Footer =()=>{
const [ref,inView] =useInView()
const control= useAnimation()
useEffect(()=>{
if (inView) {
    control.start('second')
}
},[inView])
    return (
        <div className="footerContainer" ref={ref}>
            <div className="footerTitle">
                GET
                <p className='dot'>
                <span>&nbsp;</span>
                   IN <span>&nbsp;</span> 
                   TOUCH
                </p>
                <strong>Contact</strong>
            </div>
            <div className="footerBody">
                <div className="col1">
                    <div className="contacts">
                        <p>+777777777777</p>
                        <p>+88888888888</p>
                        <p> info@3d.com</p>
                        <p> Germany , Stuttgart ,55 St</p>
                    </div>
                </div>
                <div className="col2">
                    <div className="inputGroups">
                        <Input type='text' label='Name'
                        validator={dummy} name='Name' />
                        <Input type='number' label='Phone'
                        validator={dummy} name='Phone' />
                        <Input type='text' label='Company'
                        validator={dummy} name='Company' />
                        <Input type='email' label='Email'
                        validator={isEmail} name='Email' />
                    </div>
                    <TextArea  label='message'  />
                </div>
                <div className="footerButton">
                    <div className="sendButton">

                        <motion.button 
                         variants={btn}
                         initial='first'
                         whileInView={'second'}
                         viewport={{once:true}}
                         animate={control}
                         >
                            SEND 
                            <ArrowRightAlt color="inherit" fontSize='inherit'/>
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="footerTail">
                <h4>3D<p className='dot'>.</p>com</h4>
                <p>by Ikoniks Software</p>
                <p><Copyright/> all Rights Reserved</p>
            </div>
        </div>
    )
}
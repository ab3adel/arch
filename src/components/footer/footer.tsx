import './footer.scss'
import {Input} from '../../tools/form/input/input'
import {TextArea} from '../../tools/form/textfield/textfield'
import {dummy,isEmail} from '../../tools/validations/validations'
import {motion ,Variants} from 'framer-motion'
import {ArrowRightAlt,Copyright} from '@mui/icons-material'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import {useAnimation} from 'framer-motion'
import {Apis,Url} from '../../tools/apis/apis'
import { AlertColor, CircularProgress} from '@mui/material'
import {Notification} from '../../tools/notification/notification'
import {useTranslation} from 'react-i18next'
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
interface iFields {[key:string]:string|boolean}
export const Footer =()=>{
    const {t,i18n} =useTranslation()
const [ref,inView] =useInView()
const control= useAnimation()
const [fields,setFields]=useState<iFields>({
    Name:'',NameError:false,
    Company:'',CompanyError:false,
    Email:'',EmailError:false,
    Subject:'',SubjectError:false,
    Message:'',MessageError:false
})
const [loading,setLoading]= useState(false)
const [notification,setNotification]=useState({
    show:false,
    severity:'success',
    message:''
})
const handleField =(name:string,value:string,err:boolean)=>{
    let newFields= {...fields}
    newFields[name]=value
    setFields(pre=>({...pre,...newFields}))
}
useEffect(()=>{
if (inView) {
    control.start('second')
}
},[inView])
const emptyFields= ()=>{
let newFields= {...fields}
Object.keys(newFields).map(ele=>{
    newFields[ele]=''
})
setFields(pre=>({...pre,...newFields}))
}

const checkErro =()=>{
    let newFields= {...fields}
    let errors=Object.keys(newFields).filter (ele=>
        !ele.includes('Error') && ele !== "Subject" && !newFields[ele] 
    )
    errors.map(ele=>{
       newFields[`${ele}Error`]=true
    })
    setFields(pre=>({...pre,...newFields}))
    console.log(errors)
    if (errors.length>0) return true
    return false 
}

const sendMessage =async() =>{
    if (checkErro()) return 
let formData= new FormData()
formData.append('name',fields['Name'] as string)
formData.append('email',fields['Email'] as string)
formData.append('company',fields['Company'] as string)
formData.append('subject',"message")
formData.append('message',fields['Message'] as string)
setLoading(true)
await fetch(Url+Apis.message,{
    method:'POST',
    body:formData
})
.then(res=>{
    if (res.ok) {
        setNotification(pre=>({...pre,show:true
                       ,message:'your message sent successfully',severity:'success'}))
        setLoading(false)
        emptyFields()  

    }
    else {
        setNotification(pre=>({...pre,show:true
            ,message:'your message wasn not send',severity:'error'}))
        setLoading(false)
    }
})
.catch(err=>{
    setLoading(false)
    console.log(err)
})
}
const handleClose=() =>{
    setNotification(pre=>({...pre,show:false}))
}
    return (
        <div className="footerContainer" ref={ref}>
            <div className="footerTitle">
               {t('Get')}
                <p className='dot'>
                <span>&nbsp;</span>
                   {t('In') }<span>&nbsp;</span> 
                  { t('Touch')}
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
                        <Input type='text' label={t('Name')} formFields={fields}
                        setFormField={handleField}
                        validator={dummy} name='Name' />
                        <Input type='number' label={t('Phone')}
                         formFields={fields} setFormField={handleField}
                        validator={dummy} name='Phone' />
                        <Input type='text' label={t('Company')}
                        formFields={fields} setFormField={handleField}
                        validator={dummy} name='Company' />
                        <Input type='email' label={t('Email')}
                        formFields={fields} setFormField={handleField}
                        validator={isEmail} name='Email' />
                    </div>
                    <TextArea  label={t('Message')}  formFields={fields} 
                    setFormField={handleField} name={'message'}/>
                </div>
                <div className="footerButton">
                    <div className="sendButton">

                        <motion.button 
                         variants={btn}
                         initial='first'
                         whileInView={'second'}
                         viewport={{once:true}}
                         animate={control}
                         disabled={loading}
                         onClick={()=>sendMessage()}
                         >
                             {loading ? <CircularProgress  />:
                            <>
                            {t('Send')}<ArrowRightAlt color="inherit" fontSize='inherit'/>
                            </> }
                           
                          
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="footerTail">
                <h4>3D<p className='dot'>.</p>com</h4>
                <p>by Ikoniks Software</p>
                <p><Copyright/> all Rights Reserved</p>
            </div>
            {notification.show && (<Notification show={notification.show} handleClose={handleClose}
                                    severity={notification.severity as AlertColor} message={notification.message}/>)}
        </div>
    )
}

import 
{
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    Grid,
    Button,
    DialogTitle,
    DialogContentText,
    Typography,
    Input

} 
from '@mui/material'
import React, { useState } from 'react'
import 
{
    FileCopy
} 
from '@mui/icons-material'
import 
{
    PhoneNumber

} 
from '../../../tools/form/phoneNumber/phoneNumber'
interface iProps {open:boolean,close:Function}
export const Application =({open,close}:iProps) =>{
    const [file,setFile] =useState('')
    const openCv=() =>{
        let cv= document.querySelector('#cvInput') as HTMLInputElement
        cv.click()
        
    }
    const handleCv= (e:any) =>{
        if (e.target.value) {
            setFile(e.target.value)
        }
    }

    return (
        <Dialog open={open} onClose={()=>close()} className="applicationContainer" >
               <DialogTitle >
                Application Form 
               </DialogTitle>
           
                <DialogContent className="application">
                    <DialogContentText>
                        <Typography>
                            Please fill this application if you want to apply for this posititon :
                        </Typography>
                    </DialogContentText>
                    <Grid container
                    rowGap={2}
                    padding={2}>

                        <Grid item xs={6}
                        padding={1}>
                            <TextField placeholder='First Name'
                            fullWidth />
                        </Grid>
                        <Grid item xs={6}
                        padding={1}>
                            <TextField placeholder='Last Name'
                            fullWidth />
                        </Grid>
                        <Grid item xs={6}
                         padding={1}>
                            <TextField placeholder='Email' 
                            fullWidth/>
                        </Grid>
                        <Grid item xs={6}
                         padding={1}>
                            <PhoneNumber />
                        </Grid>
                        <Grid item xs={12} 
                         padding={1}>
                            <div className="cvClick"
                            >
                                <p onClick ={()=>openCv()}
                                 className="fileInput">

                                    CV, Attachment File
                                </p>
                                <Grid item container xs={12}
                                   padding={1}
                                   >
                                   { file &&
                                   (<Grid item xs={6}
                                       padding={1}
                                       justifyContent="center"
                                       display="flex">
                                         <FileCopy />
                                       <p className="fileName">
                                            {file.slice(12)}
                                        </p>
                                       
                                        
                                    </Grid>)
                                    }

                                </Grid>
                                
                            </div>
                            {
                              
                                    <input type={'file'} 
                                    className="cvInput"
                                    id="cvInput"  
                                     onChange={handleCv}
                                    
                                    />
                                
                            }
                           

                        </Grid>
                        <Grid item xs={12}
                         className="coverLetter"
                         padding={1}>
                            <TextField 
                            placeholder='Cover Letter'
                             multiline
                             minRows={10} 
                             fullWidth/>
                        </Grid>
                    </Grid>
                    
                </DialogContent>
                <DialogActions className="applicationButtons">
                    <Grid item container xs={10}>
                        <Grid item xs={6}>
                            <Button onClick={()=>close()}
                             className="sendButton" >
                                send
                                </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={()=>close()}
                            className="cancelButtond">
                                cancel
                                </Button>
                        </Grid>
                    </Grid>

                </DialogActions>
            
        </Dialog>
    )
}
import 
{
    Snackbar,
    Alert,
    AlertColor
} 
from '@mui/material'
interface iProps {message:string,show:boolean,handleClose:Function,severity:AlertColor}

export const Notification =({message,show,handleClose,severity}:iProps)=>{


    return (
        <Snackbar open={show} autoHideDuration={5000} >
            <Alert severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

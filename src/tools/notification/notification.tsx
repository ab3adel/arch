import 
{
    Snackbar,
    Alert,
    AlertColor
} 
from '@mui/material'
interface iProps {message:string,show:boolean,handleClose:any,severity:AlertColor}

export const Notification =({message,show,handleClose,severity}:iProps)=>{


    return (
        <Snackbar open={show} autoHideDuration={10000} onClose={handleClose}>
            <Alert severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

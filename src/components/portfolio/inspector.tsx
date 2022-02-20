import 
{
    Dialog,
    DialogContent
} 
from '@mui/material'

interface iProps {open:boolean,setOpen:Function,imgSrc:string}

export const Inspector = ({open,setOpen,imgSrc}:iProps)=> {


    return (
        <Dialog open={open} onClose ={()=>setOpen (false)}>
            <DialogContent >
                <img src={imgSrc}/>
            </DialogContent>
        </Dialog>
    )
}
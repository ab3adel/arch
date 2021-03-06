import 
{
    Dialog,
    DialogContent
} 
from '@mui/material'
import './portfolio.scss'

interface iProps {open:boolean,setOpen:Function,imgSrc:string}

export const Inspector = ({open,setOpen,imgSrc}:iProps)=> {


    return (
        <Dialog open={open} onClose ={()=>setOpen (false)} className="inspector">
            <DialogContent >
                <img src={imgSrc}/>
            </DialogContent>
        </Dialog>
    )
}
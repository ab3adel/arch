import 
{
    ImageList,
    ImageListItem
}
from '@mui/material'
import {ImagePlaceHolder} from '../../tools/placeholder/imageplacehodler'
interface iProps {images:string[]}
export const PortfolioList =({images}:iProps)=>{


    return (
        <ImageList variant="woven" cols={3} gap={3} >
            {
                images.map((ele:string,index:number)=>{
                    return (
                            <ImagePlaceHolder  imgSrc={ele} key={index}/>
                       
                    )
                })
            }
        </ImageList>
    )
}
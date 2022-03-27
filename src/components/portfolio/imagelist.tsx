import 
{
    ImageList,
    ImageListItem
}
from '@mui/material'

interface iProps {images:string[]}
export const PortfolioList =({images}:iProps)=>{


    return (
        <ImageList variant="woven" cols={3} gap={3} >
            {
                images.map((ele:string,index:number)=>{
                    return (
                        <ImageListItem key={index}>
                             <img
                                    src={`${ele}?w=161&fit=crop&auto=format`}
                                    srcSet={`${ele}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                   
                                    loading="lazy"
                                />
                        </ImageListItem>
                    )
                })
            }
        </ImageList>
    )
}
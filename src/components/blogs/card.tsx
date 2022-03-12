import
 {
     Badge,
     Divider
 } 
from '@mui/material'
import {ArrowRightAltOutlined} from '@mui/icons-material'

interface iProps {tags:string[],image:string,title:string
                 ,content:string,author:string,date:string}
export const Card = ({tags,image,title,content,author,date}:iProps) =>{

    return (
        <div className="blogCard">
            <img src={image} />
            <div className="cardInfo">
                <div className="tags">
                   {tags.map((ele,index:number)=>{
                       return <span key={index}>{ele}</span>
                   })}
                    
                </div>
                <div className="description">
                    <div className="title">
                      {title}
                    </div>
                    <div className="content">
                       {content.slice(0,200)}
                    </div>
                </div>
                <Divider />
                <div className="author">
                    <p>by<span>&nbsp;</span>:<span>&nbsp;</span><span>{author}</span></p>
                    <p>{date}</p>
                </div>
                <div className="readMore">
                    <button>
                        Read More 
                        <ArrowRightAltOutlined color="inherit" fontSize='inherit'/>
                    </button>
                </div>
            </div>
        </div>
    )
}
import './blogs.scss'

import Image from '../../images/blogs/background.jpg'
import {Card} from './card'
let tags=['Interior','Design','Interior','Design','Interior','Design','Interior','Design']
let data = [
    {image:Image,tags,author:'Craig Clar',date:'24 July',title:'Aliqua aliquip in est commodo amet occaecat ',
         content:`Aliqua enim commodo enim fugiat velit anim commodo mollit pariatur pariatur proident veniam 
         adipisicing. Enim dolor qui mollit duis sint magna Lorem cupidatat in irure. Irure enim proident duis 
         aute ad quis occaecat in non deserunt ullamco minim.`,id:1},
    {image:Image,tags,author:'Craig Clar',date:'24 July',title:'Aliqua aliquip in est commodo amet occaecat ',
         content:`Aliqua enim commodo enim fugiat velit anim commodo mollit pariatur pariatur proident veniam 
         adipisicing. Enim dolor qui mollit duis sint magna Lorem cupidatat in irure. Irure enim proident duis 
         aute ad quis occaecat in non deserunt ullamco minim.`,id:1},
    {image:Image,tags,author:'Craig Clar',date:'24 July',title:'Aliqua aliquip in est commodo amet occaecat ',
         content:`Aliqua enim commodo enim fugiat velit anim commodo mollit pariatur pariatur proident veniam 
         adipisicing. Enim dolor qui mollit duis sint magna Lorem cupidatat in irure. Irure enim proident duis 
         aute ad quis occaecat in non deserunt ullamco minim.`,id:1},
    {image:Image,tags,author:'Craig Clar',date:'24 July',title:'Aliqua aliquip in est commodo amet occaecat ',
         content:`Aliqua enim commodo enim fugiat velit anim commodo mollit pariatur pariatur proident veniam 
         adipisicing. Enim dolor qui mollit duis sint magna Lorem cupidatat in irure. Irure enim proident duis 
         aute ad quis occaecat in non deserunt ullamco minim. .`,id:1},
    {image:Image,tags,author:'Craig Clar',date:'24 July',title:'Aliqua aliquip in est commodo amet occaecat ',
         content:`Aliqua enim commodo enim fugiat velit anim commodo mollit pariatur pariatur proident veniam 
         adipisicing. Enim dolor qui mollit duis sint magna Lorem cupidatat in irure. Irure enim proident duis 
         aute ad quis occaecat in non deserunt ullamco minim. `,id:1}
        ]
export const Blogs =() =>{


    return (
        <div className="blog">
            <div className="intro">
                <div className='introTitle'>
                    <h1>Blog</h1>
                </div>
            </div>
           {data.map((ele,index:number)=>{
               return (<Card tags={ele.tags} 
                            author={ele.author}
                            date={ele.date}
                            title={ele.title}
                            content={ele.content}
                            id={ele.id}
                            key={index}
                            image={ele.image}/> )
           })}
        </div>
    )
}
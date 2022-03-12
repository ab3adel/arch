import {RouteObject} from 'react-router-dom'
import {Layout} from '../components/layout/layout'
import {HomePage} from '../components/homepage/homepage'
import {Portfolio} from '../components/portfolio/portfolio'
import {About} from '../components/about/about'
import {Services} from '../components/services/services'
import {Blogs} from '../components/blogs/blogs'
import {Contacts} from '../components/contacts/contacts'
export const routes:RouteObject [] = [
    {
        path:'/',element:<Layout/>,
        children:[ 
          {path:'/',index:true,element:<HomePage/>},
          {path:'/portfolio/:slug',element:<Portfolio />},
          {path:'/about',element:<About/>},
          {path:'/services',element:<Services/>},
          {path:'/blogs',element:<Blogs/>},
          {path:'/contacts',element:<Contacts/>},



        ]
    }
]

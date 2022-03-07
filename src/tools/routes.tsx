import {RouteObject} from 'react-router-dom'
import {Layout} from '../components/layout/layout'
import {HomePage} from '../components/homepage/homepage'
import {Portfolio} from '../components/portfolio/portfolio'
import {About} from '../components/about/about'
export const routes:RouteObject [] = [
    {
        path:'/',element:<Layout/>,
        children:[ 
          {path:'/',index:true,element:<HomePage/>},
          {path:'/portfolio/:slug',element:<Portfolio />},
          {path:'/about',element:<About/>}

        ]
    }
]

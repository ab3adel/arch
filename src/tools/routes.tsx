import {RouteObject} from 'react-router-dom'
import {Layout} from '../components/layout/layout'
import {HomePage} from '../components/homepage/homepage'
export const routes:RouteObject [] = [
    {
        path:'/',element:<Layout/>,
        children:[ 
          {  path:'/',index:true,element:<HomePage/>},

        ]
    }
]

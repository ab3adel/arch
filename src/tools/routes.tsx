import {RouteObject} from 'react-router-dom'
import {Layout} from '../components/layout/layout'
import {HomePage} from '../components/homepage/homepage'
import {Services} from '../components/services/services'
import {Blogs} from '../components/blogs/blogs'
import {BlogDetails} from '../components/blogs/blogdetails/blogdetails'
import Portfolio from '../components/portfolioSection/portfolio'
import {PortfolioList} from '../components/portfolioSection/portfolioList/portfolioList'
import {PortfolioDetails} from '../components/portfolioSection/portfolioDetails/portfolioDetails'
import React, { ComponentType } from 'react'
const About = React.lazy(()=>import('../components/about/about'))
const Contacts = React.lazy(()=>import('../components/contacts/contacts'))

export const routes:RouteObject [] = [
    {
        path:'/',element:<Layout/>,
        children:[ 
          {path:'/',index:true,element:<HomePage/>},
          {path:'/portfolio',element:<Portfolio />,children:[
            {path:'/portfolio',index:true,element:<PortfolioList/>}
            ,{path:'/portfolio/:id/:slug',element:<PortfolioDetails />}
          ]},
          {path:'/about',element:<About/>},
          {path:'/services/:id',element:<Services/>},
          {path:'/blogs',element:<Blogs/>},
      
          {path:'/blogs/:id',element:<BlogDetails/>},
        
          {path:'/contacts',element:<Contacts/>},



        ]
    }
]

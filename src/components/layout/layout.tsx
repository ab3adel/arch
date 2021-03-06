import './layout.scss'
import {Outlet} from 'react-router'
import {Footer} from '../footerSection/footerSection'
import {Navbar} from '../navbar/navbar'
export const Layout =() =>{

    return (
        <div className="layoutContainer">

            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}
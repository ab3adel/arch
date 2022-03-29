import './contacts.scss'
import {Map} from '../about/map'
import 
 {
     Phone,
     Email,
     LocationCity
 }
from '@mui/icons-material'
import GoogleMapReact  from 'google-map-react'
 const Contacts =() =>{



    return (
        <div className="contactsContainer">
            <div className="contactsTitle">
                <h1>Contact Us</h1>
            </div>
            <div className="contactsInfo">
                <div className="googleMap">
                    <GoogleMapReact 
                    center={{lat:59,lng:60}}
                    zoom={11}/>
                </div>
                <div className="contactsAll">
                    <div className="contactsWord">
                        Contact
                    </div>
                    <div className="info">
                        <div className="title">
                            <Phone color='inherit' fontSize='inherit'/>
                            <h5>PHONE</h5>
                        </div>
                        <div className="body">
                            <p>+0<span>&nbsp;</span>444<span>&nbsp;</span>444<span>&nbsp;</span>66-77</p>
                            <p>+0<span>&nbsp;</span>444<span>&nbsp;</span>444<span>&nbsp;</span>66-77</p>
                            <p>+0<span>&nbsp;</span>444<span>&nbsp;</span>444<span>&nbsp;</span>66-77</p>
                            <p>+0<span>&nbsp;</span>444<span>&nbsp;</span>444<span>&nbsp;</span>66-77</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <Email color='inherit' fontSize='inherit'/>
                            <h5>EMAIL</h5>
                        </div>
                        <div className="body">
                            <p>3D.Ikoniks@gmail.com</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <LocationCity color='inherit' fontSize='inherit'/>
                            <h5>ADDRESS</h5>
                        </div>
                        <div className="body">
                            <p>USA.NEWYORK </p>
                            <p>ST 44848 Local 8390</p>
                        </div>
                    </div>

                </div>
            </div>
            <Map />   
        </div>
    )
}
export default Contacts;
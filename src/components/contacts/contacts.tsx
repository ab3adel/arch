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
import {useTranslation} from 'react-i18next'
import {Footer} from '../footer/footer'
 const Contacts =() =>{
const {t,i18n} =useTranslation()


    return (
        <div className="contactsContainer">
            <div className="contactsTitle">
                <h1>{t('ContactUs')}</h1>
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
                            <h5>{t('Phone')}</h5>
                        </div>
                        <div className="body">
                            <p>+(+49)<span>&nbsp;</span>173<span>&nbsp;</span>935<span>&nbsp;</span>4932</p>
                            <p>+(+49)<span>&nbsp;</span>173<span>&nbsp;</span>935<span>&nbsp;</span>4932</p>
                            <p>+(+49)<span>&nbsp;</span>173<span>&nbsp;</span>935<span>&nbsp;</span>4932</p>
                            <p>+(+49)<span>&nbsp;</span>173<span>&nbsp;</span>935<span>&nbsp;</span>4932</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <Email color='inherit' fontSize='inherit'/>
                            <h5>{t("Email")}</h5>
                        </div>
                        <div className="body">
                            <p>service@ikoniks.de</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title">
                            <LocationCity color='inherit' fontSize='inherit'/>
                            <h5>{t("Address")}</h5>
                        </div>
                        <div className="body">
                            <p>Filderbahnplatz.35 </p>
                            <p>70567 Stuttgart</p>
                        </div>
                    </div>

                </div>
            </div>
            <Map />   
            <Footer />
        </div>
    )
}
export default Contacts;
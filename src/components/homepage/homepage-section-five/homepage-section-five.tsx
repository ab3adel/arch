import './homepage-section-five.scss'
import {ArrowRightAlt} from '@mui/icons-material'
import Client1 from '../../../images/homepage5/client1.png'
import Client2 from '../../../images/homepage5/client2.png'
import {useTranslation} from 'react-i18next'
import { letterSpacing } from '@mui/system'
export const HomepageSectionFive = () => {
    const {t,i18n} =useTranslation ()

    return (
        <div className="homepageFiveContainer">
            <div className="homepageFiveTitle" style={{letterSpacing:i18n.language==="en"?"1rem":"0px"}}>
               {t('Our')} <p>{t('Clients')}</p>
            </div>
            <div className="homepageFiveBody">
                <div className="client">
                    <img src={Client1} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client2} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client1} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client2} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client1} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client2} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client1} />
                    <p></p>
                </div>
                <div className="client">
                    <img src={Client2} />
                    <p></p>
                </div>
            </div>
            <div className="homepageFiveButton">
                <button>
                  {  t('WorkTogether') }
                    <ArrowRightAlt fontSize='inherit' color='inherit'/>
                </button>
            </div>
        </div>
    )
}
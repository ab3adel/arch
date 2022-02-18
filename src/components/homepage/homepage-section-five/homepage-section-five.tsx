import './homepage-section-five.scss'
import {ArrowRightAlt} from '@mui/icons-material'
import Client1 from '../../../images/homepage5/client1.png'
import Client2 from '../../../images/homepage5/client2.png'
export const HomepageSectionFive = () => {
    

    return (
        <div className="homepageFiveContainer">
            <div className="homepageFiveTitle">
                OUR <p>CLIENTS</p>
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
                    Work Together 
                    <ArrowRightAlt fontSize='inherit' color='inherit'/>
                </button>
            </div>
        </div>
    )
}
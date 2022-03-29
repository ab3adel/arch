import './about.scss'

import {OurServices} from './services'
import {Map} from './map'
 const About =() =>{


    return (
        <div className="aboutContainer">
            <h2>ABOUT 3D.IKONKS</h2>
            <div className="aboutIntro">
                <h4>We turn ideas into works of art<span>.</span></h4>
                <p>
                    For each project we establish relationships with partners who we know will help 
                    us create added value for your project. As well as bringing together the public 
                    and private sectors, we make sector-overarching links to gather knowledge and to 
                    learn from each other. The way we undertake projects is based on permanently applying 
                    values that reinforce each other: socio-cultural value, experiental value, 
                    building-technical value and economical value. 
                    This way of working allows us to raise your project to a higher level.
                </p>
            </div>
            <OurServices />
            <Map />
        </div>
    )
}
export default About;

import './homepage-section-two.scss'
import Arch from '../../../images/homepage2/icon-architecture.png'
import Interior from '../../../images/homepage2/icon-interiors.png'
import Plan from '../../../images/homepage2/icon-planing.png'
import HomeImg from '../../../images/homepage2/homepage2.jpg'
import {Divider} from '@mui/material'
export const HomepageSectionTwo =()=>{


    return (
        <div className="homepageTwoContainer">
            <div className="homepageTwoHeader">
                <h1>
                    ABOUT 
                    <p className='dotArch'>GO.ARCH</p>
                </h1>
            </div>
            <div className="homepageTwoBody">
               
                <div className="col1">
                    <div className="colContent">
                        
                        <h3>we turns idea into works of art <span className='dotArch'>.</span></h3>
                        <p>
                        For each project we establish relationships with partners who we know 
                        will help us create added value for your project. As well as bringing 
                        together the public and private sectors, we make sector-overarching links to 
                        gather knowledge and to learn from each other. The way we undertake projects
                        is based on permanently applying values that reinforce each other: socio-cultural value, 
                        experiental value, building-technical value and economical value.
                        </p>
                    </div>
                </div>
                <div className="col2">
                    <Divider />
                    <div className="colContent">

                        <h3>our specialization <span className="dotArch">:</span> </h3>
                        <div className="colBody">

                            <div className="specialization">
                                <img src={Arch}/>
                                <p>architecture</p>
                            </div>
                            <div className="specialization">
                                <img src={Interior}/>
                                <p>interiors</p>
                            </div>
                            <div className="specialization">
                                <img src={Plan}/>
                                <p>planing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div className="colContent">

                        <img src={HomeImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
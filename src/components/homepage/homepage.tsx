import './homepage.scss'
import {HomePageSectionOne} from './homepage-section-one/homepage-section-one'
import {HomepageSectionTwo} from './homepage-section-two/homepage-section-two'
import {HomepageSectionThree} from './homepage-section-three/homepage-section-three'
import {HomepageSectionFour} from './homepage-section-four/homepage-section-four'
import {HomepageSectionFive} from './homepage-section-five/homepage-section-five'
export const HomePage =() =>{

    return (
        <div className="homepageContainer">
            <HomePageSectionOne/>
            <HomepageSectionTwo/>
            <HomepageSectionThree />
            <HomepageSectionFour/>
            <HomepageSectionFive/>
        </div>
    )
}
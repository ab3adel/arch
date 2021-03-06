import './homepage.scss'
import {HomePageSectionOne} from './homepage-section-one/homepage-section-one'
import {HomepageSectionTwo} from './homepage-section-two/homepage-section-two'
import {HomepageSectionThree} from './homepage-section-three/homepage-section-three'
import {HomepageSectionFour} from './homepage-section-four/homepage-section-four'
import {HomepageSectionFive} from './homepage-section-five/homepage-section-five'
import {HomepageSectionSeven} from './homepage-section-seven/homepage-section-seven'
import {HomepageSectionEight} from './homepage-section-eight/homepage-section-eight'
import testImg1 from '../../images/slide1.jpg'
import testImg2 from '../../images/slide2.jpg'
import testImg3 from '../../images/slide3.jpg'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'
import {HomepageSectionSix} from './homepage-section-six/homepage-section-six'
import { useEffect, useLayoutEffect, useState } from 'react'

export const HomePage =() =>{
 const [isFinished,setIsFinished]= useState(true)
  
    return (
        <div className="homepageContainer">
          
            <HomePageSectionOne 
                />
            <HomepageSectionTwo />
            <HomepageSectionThree />
            {/* <HomepageSectionFour/> */}
            <HomepageSectionFive/>
            <HomepageSectionSix />
            <HomepageSectionSeven />
            <HomepageSectionEight />
        <LoadingPage 

                       isFinished={isFinished} 
                       setIsFinished={setIsFinished}
                      images={[testImg1,testImg2,testImg3]}/> 
        </div> 
    )
}

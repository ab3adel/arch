import './homepage.scss'
import {HomePageSectionOne} from './homepage-section-one/homepage-section-one'

import {HomepageSectionThree} from './homepage-section-three/homepage-section-three'
import {HomepageSectionFour} from './homepage-section-four/homepage-section-four'
import {HomepageSectionFive} from './homepage-section-five/homepage-section-five'
import testImg1 from '../../images/slide1.jpg'
import testImg2 from '../../images/slide2.jpg'
import testImg3 from '../../images/slide3.jpg'
import {LoadingPage} from '../../tools/loadingpage/loadingpage'

import { useEffect, useLayoutEffect, useState } from 'react'

export const HomePage =() =>{
 const [isFinished,setIsFinished]= useState(true)
  
    return (
        <div className="homepageContainer">
          
            <HomePageSectionOne 
                />
       
            <HomepageSectionThree />
            <HomepageSectionFour/>
            <HomepageSectionFive/>
        <LoadingPage 
                       isFinished={isFinished} 
                       setIsFinished={setIsFinished}
                      images={[testImg1,testImg2,testImg3]}/>
        </div> 
    )
}

import React from 'react'
import './Main.css'
import CarouselSlide from '../../components/Slider/Slider'
import HowItWorks from '../../components/Works/Works'
import LandingComp1 from '../../components/LandingComp1/LandingComp1'

function Main() {
  return (
    <>
     <CarouselSlide/>
     <LandingComp1/>
     <HowItWorks/>
    </>
  )
}

export default Main
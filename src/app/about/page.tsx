import React from 'react'
import AboutHero from './components/AboutHero'
import AboutSection from './components/AboutUsSection'
import WhyScribesSection from './components/WhyScribes'
import VisionMissionSection from './components/Statements'
import FounderSection from './components/Author'

const AboutUs = () => {
  return (
    <div>
        <AboutHero />
        <AboutSection />
        <WhyScribesSection />
        <VisionMissionSection />
        <FounderSection />
    </div>
  )
}

export default AboutUs
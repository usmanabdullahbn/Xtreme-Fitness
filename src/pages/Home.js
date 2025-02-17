import React from 'react'
import Hero from '../component/Hero'
import TeamSection from '../component/Team'
import Testimonials from '../component/Testomorials'
import PricingSection from '../component/Pricing'
import BlogSection from '../component/Blog'
import FeaturesSection from '../component/Features'


const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <FeaturesSection />
        <Testimonials />
        <TeamSection />
        <PricingSection />
        <BlogSection />
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../component/Hero'
import TeamSection from '../component/Team'
import Testimonials from '../component/Testomorials'
import PricingSection from '../component/Pricing'
import BlogSection from '../component/Blog'
import FeaturesSection from '../component/Features'
import AboutSection from '../component/About'
import ContactSection from '../component/Contact'
import ServicesSection from '../component/Services'


const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <TeamSection />
        <PricingSection />
        {/* <BlogSection /> */}
        <ContactSection />
    </div>
  )
}

export default Home
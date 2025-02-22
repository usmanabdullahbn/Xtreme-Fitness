import React from "react";
import AboutSection from "../component/About";
import ContactSection from "../component/Contact";
import FeaturesSection from "../component/Features";
import Hero from "../component/Hero";
import PricingSection from "../component/Pricing";
import ServicesSection from "../component/Services";
import TeamSection from "../component/Team";
import Testimonials from "../component/Testomorials";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="">
        <Testimonials />
      </section>
      <section id="trainers">
        <TeamSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;

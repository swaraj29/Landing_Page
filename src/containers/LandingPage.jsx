import React from 'react';
import Header from '../components/landingPage/Header';
import Navbar from '../components/landingPage/Navbar';
import Hero from '../components/landingPage/Hero';
import Testimonials from '../components/landingPage/Testimonials';
import WhyChoose from '../components/landingPage/WhyChoose';
import Pricing from '../components/landingPage/PricingSection';
import Faq from '../components/landingPage/FAQSection';
import Footer from '../components/landingPage/Footer';
const LandingPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Testimonials />
      <WhyChoose />
      <Pricing />
      <Faq />
      <Footer />

    </>
  );
};

export default LandingPage;

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FeaturedRestaurants />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

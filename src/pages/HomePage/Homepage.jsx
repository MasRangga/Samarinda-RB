import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../Features/Features";
import CardComponent from "../PriceCard/CardComponent";
import CallToAction from "../../components/CallToAction/CallToAction";
import Review from "../Review/Review";
import Footer from "../../components/Footer/Footer";
import Faq from "../../components/Faq/Faq";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CardComponent />
      <Faq />
      <CallToAction />
      <Review />
      <Footer />
    </>
  );
};

export default Homepage;

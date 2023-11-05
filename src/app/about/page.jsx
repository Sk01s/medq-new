"use client";
import AboutContent from "@/components/About/AboutContent";
import Doctors from "@/components/About/Doctors";
import Funfacts from "@/components/About/Funfacts";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import FacilityStyleOne from "@/components/Common/FacilityStyleOne";
import FeedbackStyleOne from "@/components/Common/FeedbackStyleOne";
import PageBanner from "@/components/Common/PageBanner";
import React from "react";

const About = () => {
  return (
    <>
      <PageBanner
        pageTitle="About"
        homePageText="Home"
        homePageUrl="/"
        activePageText="About"
      />

      <AboutContent />

      <Funfacts />

      <WhyChooseUs />

      <FeedbackStyleOne />

      <Doctors />

      <FacilityStyleOne />
    </>
  );
};

export default About;

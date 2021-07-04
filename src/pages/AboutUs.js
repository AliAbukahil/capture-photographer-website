import React from "react";
// importing Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSections from "../components/FaqSections";
// Importing Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Importing ScrollTop
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSections />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;

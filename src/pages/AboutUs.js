import React from "react";
// importing Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSections from "../components/FaqSections";
// Importing Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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
    </motion.div>
  );
}

export default AboutUs;

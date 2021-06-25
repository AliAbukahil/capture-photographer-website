import React from "react";
// Importing Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <h1>Our CONTACT</h1>
    </motion.div>
  );
}

export default ContactUs;

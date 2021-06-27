import React, { useState } from "react";
// Framer Motion Animation
import { motion } from "framer-motion";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div onClick={() => setToggle(!toggle)}>
      <motion.h4> {title} </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
}

export default Toggle;

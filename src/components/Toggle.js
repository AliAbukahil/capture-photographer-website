import React, { useState } from 'react';
// Framer Motion
import { motion } from 'framer-motion';

export default function Toggle({ children, title }) {
  // console.log(children);

  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h3 layout>{title}</motion.h3>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
}

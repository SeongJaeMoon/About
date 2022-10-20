import React from 'react';
import { motion } from 'framer-motion';

export function PageMotion(props) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}>
      {props.children}
    </motion.div>
  );
}
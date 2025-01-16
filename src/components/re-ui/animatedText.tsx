"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  textStyle?: string;
  duration?: number;
  staggerDelay?: number;
  repeatDelay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  textStyle = "text-xl md:text-4xl xl:text-7xl text-black font-bold uppercase",
  duration = 0.5,
  staggerDelay = 0.1,
  repeatDelay = 1,
}) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        repeat: Infinity,
        repeatDelay: repeatDelay,
      },
    },
  };

  const letter = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`flex space-x-1 ${textStyle}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

import React from 'react';
import { motion, UseInViewOptions } from 'motion/react';
import { AnimationPreset } from '../types';

interface ScrollRevealProps {
  children: React.ReactNode;
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: UseInViewOptions['amount'];
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scaleInitial?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  preset = 'zoom-in',
  delay = 0,
  duration = 0.6,
  once = false, // Set to false so element fades out / zooms out when scrolled out of view and re-animates smoothly
  amount = 0.15,
  className = '',
  direction = 'up',
  distance = 35,
  scaleInitial,
}) => {
  // Determine direction offsets
  let xOffset = 0;
  let yOffset = 0;

  if (direction === 'up') yOffset = distance;
  if (direction === 'down') yOffset = -distance;
  if (direction === 'left') xOffset = distance;
  if (direction === 'right') xOffset = -distance;

  // Variants based on preset
  const getVariants = () => {
    switch (preset) {
      case 'zoom-in':
        return {
          initial: {
            opacity: 0,
            scale: scaleInitial ?? 0.82,
            x: xOffset,
            y: yOffset,
            filter: 'blur(4px)',
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
          },
          exit: {
            opacity: 0,
            scale: scaleInitial ?? 0.82,
            x: xOffset,
            y: yOffset,
            filter: 'blur(4px)',
          },
        };

      case 'zoom-out':
        return {
          initial: {
            opacity: 0,
            scale: scaleInitial ?? 1.25,
            x: xOffset,
            y: yOffset,
            filter: 'blur(4px)',
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
          },
          exit: {
            opacity: 0,
            scale: scaleInitial ?? 1.25,
            filter: 'blur(4px)',
          },
        };

      case 'flip-zoom':
        return {
          initial: {
            opacity: 0,
            scale: 0.75,
            rotateX: 25,
            y: yOffset || 40,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
          },
          exit: {
            opacity: 0,
            scale: 0.75,
            rotateX: -25,
          },
        };

      case 'blur-zoom':
        return {
          initial: {
            opacity: 0,
            scale: 0.88,
            filter: 'blur(12px)',
            y: yOffset,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            y: 0,
          },
          exit: {
            opacity: 0,
            scale: 0.88,
            filter: 'blur(12px)',
          },
        };

      case 'fade-up':
      default:
        return {
          initial: {
            opacity: 0,
            scale: scaleInitial ?? 0.95,
            y: yOffset || 30,
            x: xOffset,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
          },
          exit: {
            opacity: 0,
            scale: scaleInitial ?? 0.95,
            y: yOffset || 30,
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier springy smooth curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

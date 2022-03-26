export const pageTransitionAnimate = {
  start: {
    opacity: 0,
    scale: 0.9,
  },
  end: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};
export const pageAnimate = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3,
};

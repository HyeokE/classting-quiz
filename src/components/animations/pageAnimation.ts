export const pageTransitionAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
    },
  },
};
export const pageAnimate = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

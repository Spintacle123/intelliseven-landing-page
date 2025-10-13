export const textAnimations = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const desktopTextSlide = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const desktopGradientScale = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export const glowEffect = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0.5, scale: 1 },
  transition: {
    duration: 2,
    delay: 0.8,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export const accentLine = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "100%", opacity: 0.3 },
};

export const backgroundOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 0.4 },
};

export const imageAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const getParticleAnimation = (index) => ({
  initial: {
    opacity: 0,
    x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
    y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
  },
  animate: {
    opacity: [0.1, 0.3, 0.1],
    y: [0, -30, 0],
    x: [0, Math.random() * 20 - 10, 0],
  },
  transition: {
    duration: 3 + Math.random() * 2,
    delay: index * 0.3,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export const animationTimings = {
  mobile: {
    headline: 0.8,
    firstLine: 0.6,
    secondLine: 0.7,
    image: 1,
    delays: {
      firstLine: 0.2,
      secondLine: 0.4,
      image: 0.6,
    },
  },
  desktop: {
    background: 1.5,
    firstLine: 0.8,
    secondLine: 1,
    accentLine: 1.2,
    image: 1.2,
    delays: {
      firstLine: 0.3,
      secondLine: 0.6,
      accentLine: 1.2,
      image: 0.4,
    },
  },
};

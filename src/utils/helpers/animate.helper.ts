type AnimateVariantsType = keyof typeof animateObject;

const animateObject = {
  animationClearButton: {
    hidden: {
      opacity: 0,
      x: 52,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  animateOpacity: {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  },
  animateOpacityWithDelay: {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    close: {
      opacity: 0,
    },
  },

  animateDrawerBg: {
    open: { y: 0, transition: { duration: 0.4 } },
    close: { y: '100%', transition: { duration: 0.3 } },
  },

  animateModalMobileDrag: {
    animate: {
      y: 0,
      x: '-50%',
      transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
    },
    exit: {
      y: '100%',
      x: '-50%',
      overflow: 'hidden',
      transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
    },
    initial: { y: '100%', x: '-50%' },
  },

  animateComboboxOverlay: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
    },
  },

  animateComboboxContent: {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      y: -20,
      opacity: 0,
    },
  },

  animateHeightWithOpacity: {
    hide: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: 'auto',
    },
  },

  animateModal: {
    open: {
      opacity: 1,
      scale: 1,
    },
    close: {
      opacity: 0,
      scale: 0.92,
    },
  },

  animateModalMobile: {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: '100%',
      opacity: 0,
    },
  },

  animateTooltip: {
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: 5,
    },
  },

  animateMenu: {
    open: {
      height: '100vh',
      opacity: 1,
    },
    close: {
      height: 0,
      opacity: 0,
    },
  },

  animateDropdownWithTransform: {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -20,
      overflow: 'hidden',
    },
  },

  animateAccordion: {
    open: {
      opacity: 1,
      y: 0,
      height: 'auto',
    },
    close: {
      opacity: 0,
      y: -20,
      overflow: 'hidden',
      height: 0,
    },
  },
};

export const animateHelper = (variant: AnimateVariantsType) => animateObject[variant];

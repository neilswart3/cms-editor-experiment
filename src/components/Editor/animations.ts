const circlePos = '2.75rem calc(100% - 2.75rem)'

export const content = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.75,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
}

export const editor = {
  open: {
    width: 300,
    transition: {
      delay: 0.25,
    },
  },
  closed: {
    width: 0,
    transition: {
      delay: 0.75,
    },
  },
}

export const sidebar = {
  open: {
    clipPath: `circle(150vh at ${circlePos})`,
    transition: {
      type: 'spring',
      stiffness: 80,
      restDelta: 2,
      delay: 0.25,
    },
  },
  closed: {
    clipPath: `circle(1.5rem at ${circlePos})`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

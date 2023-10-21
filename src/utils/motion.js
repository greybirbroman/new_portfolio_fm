export const logoVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

export const sidebarVariants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: 'spring',
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    },
  };
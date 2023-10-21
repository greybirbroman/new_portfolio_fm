import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { sidebarVariants } from '../utils/motion';
import { navigationLinks } from '../utils/constants';
import BurgerMenuButton from '../components/BurgerMenuButton'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const sidebarListItemVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const sidebarItemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -50,
      opacity: 0,
    },
  };

  const Links = () => (
    <m.ul
      variants={sidebarListItemVariants}
      className='w-full h-full flex flex-col items-center justify-center gap-20 capitalize text-black bg-white'
    >
      {navigationLinks.map((item) => (
        <m.li
          variants={sidebarItemVariants}
          key={item.link}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className='text-[40px]'
        >
          <a href={item.link}>{item.title}</a>
        </m.li>
      ))}
    </m.ul>
  );

  return (
    <m.div
      animate={isOpen ? 'open' : 'closed'}
      className='bg-white flex flex-col items-center justify-center z-50'
    >
      <m.div
        variants={sidebarVariants}
        className='fixed top-0 left-0 w-[400px] h-full'
      >
        <Links />
      </m.div>
      <BurgerMenuButton onClick={toggleMenu} />
    </m.div>
  );
};

export { Sidebar };

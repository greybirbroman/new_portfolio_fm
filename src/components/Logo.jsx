import logo from '../images/logo_transparent.svg';
import { motion as m } from 'framer-motion';
import { logoVariants } from '../utils/motion';

const Logo = () => {
  return (
    <m.a
      variants={logoVariants}
      initial='hidden'
      animate='visible'
      href='https://github.com/greybirbroman/'
      target='_blank'
      rel='noreferrer'
    >
      <img src={logo} alt='logo, image' width={50} height={50} />
    </m.a>
  );
};

export { Logo };

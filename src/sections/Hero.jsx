import hero from '../images/hero.png';
import scroll from '../images/scroll.png';
import { CustomLink } from '../components';
import { motion as m } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const Hero = () => {
  const heroTechs = 'Next.js TailwindCSS, Redux, TypeScript';
  return (
    <div className='h-[calc(100vh-100px)] bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden relative'>
      <div className='max-w-[1366px] mx-auto flex items-center justify-between'>
        <m.div
          variants={textVariants}
          initial='initial'
          animate='animate'
          className='flex flex-col gap-[40px] justify-center lg:w-1/2 w-full z-10'
        >
          <m.h2
            variants={textVariants}
            className='text-[30px] text-purple-700 font-bold tracking-widest'
          >
            ROMAN FEDOROV
          </m.h2>
          <m.h1
            variants={textVariants}
            className='text-[88px] font-semibold tracking-wide'
          >
            Frontend Developer
          </m.h1>
          <m.div variants={textVariants} className='flex items-center gap-5'>
            <CustomLink label='see the latest works' />
            <CustomLink label='see the latest works' variant='white' />
          </m.div>

          <m.img
            variants={textVariants}
            animate='scrollButton'
            src={scroll}
            alt='scroll, icon, image'
            className='w-[50px]'
          />
        </m.div>

        <m.div
          className='absolute text-[50vh] -bottom-[120px] whitespace-nowrap text-gray-500/10 w-1/2 font-bold'
          variants={sliderVariants}
          initial='initial'
          animate='animate'
        >
          {heroTechs}
        </m.div>

        {/* <div className='h-full absolute top-0 right-0'> */}
        <img
          src={hero}
          alt='Roman Fedorov, frontend-developer, site-owner'
          className=' object-contain w-1/2 rounded-full hidden lg:flex'
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;

import { useRef } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type, title }) => {
  const typeGradient = () =>
    type === 'services'
      ? 'bg-gradient-to-b from-[#111132] to-[#0c0c1d]'
      : 'bg-gradient-to-b from-[#111132] to-[#505064]';

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textTransform = useTransform(scrollYProgress, [0, 1], ['0', '500%']);
  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['0', '100%']
  );

  return (
    <div
      ref={ref}
      className={`h-full w-full mx-auto relative flex items-center justify-center overflow-hidden ${typeGradient()}`}
    >
      <m.h3
        style={{ y: textTransform }}
        className='text-8xl capitalize font-semibold'
      >
        {title}
      </m.h3>

      <div className="bg-[url('./images/mountains.png')] w-full h-full absolute bg-bottom bg-cover z-30"></div>
      <m.div
        style={{ y: backgroundTransform }}
        className={`${
          type === 'services'
            ? "bg-[url('./images/planets.png')]"
            : "bg-[url('./images/sun.png')]"
        } w-full h-full absolute bg-bottom bg-cover z-20`}
      ></m.div>
      <m.div
        style={{ x: backgroundTransform }}
        className="bg-[url('./images/stars.png')] w-full h-full absolute bg-bottom bg-cover z-10"
      ></m.div>
    </div>
  );
};

export { Parallax };

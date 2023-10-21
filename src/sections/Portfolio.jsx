import { useRef } from 'react';
import { portfolio } from '../utils/constants';
import { ProjectCard } from '../components';
import { motion as m, useScroll, useSpring } from 'framer-motion';

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 20,
    dumping: 30
  })

  return (
    <div ref={ref} className='relative'>
      <div className='sticky top-0 left-0 pt-[50px] text-center text-orange-500'>
        <h3 className='text-[36px]'>Featured Works</h3>
        <m.div style={{ scaleX }} className='h-[10px] bg-white'></m.div>
      </div>
      <ul className='flex flex-col justify-center gap-20'>
        {portfolio.map((item) => (
          <li key={item.id}>
            <ProjectCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;

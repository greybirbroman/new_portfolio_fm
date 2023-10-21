import { useRef } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ title, image, demo }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end, start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className='flex flex-wrap items-center justify-center gap-10 max-w-[1366px] mx-auto'>
      <div ref={ref} className='flex-1 h-[50%] overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='rounded-xl object-cover'
        />
      </div>

      <m.div className='flex flex-col gap-10 flex-1' style={{ y }}>
        <h4 className='text-[72px]'>{title}</h4>
        <p className='text-[20px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quis facere blanditiis esse sunt, veniam corrupti incidunt cumque
          perferendis nobis necessitatibus exercitationem quasi repudiandae a,
          laborum odit adipisci nisi vero!
        </p>
        <a target='_blank' href={demo} rel="noreferrer">See Demo</a>
      </m.div>
    </section>
  );
};

export { ProjectCard };

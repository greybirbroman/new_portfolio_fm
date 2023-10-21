import { useRef } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ title, image, demo }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const yTranform = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className='flex flex-wrap items-center justify-center gap-20 max-w-[1366px] mx-auto' ref={ref}>
      <img src={image} alt={title} className='rounded-xl object-cover flex-1' />
       
      <m.div className='flex flex-col gap-10 flex-1' style={{ yTranform }}>
        <h4>{title}</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          quis facere blanditiis esse sunt, veniam corrupti incidunt cumque
          perferendis nobis necessitatibus exercitationem quasi repudiandae a,
          laborum odit adipisci nisi vero!
        </p>
        <button>See Demo</button>
      </m.div>
    </section>
  );
};

export { ProjectCard };

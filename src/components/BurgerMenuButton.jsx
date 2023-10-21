import { motion as m } from 'framer-motion';

const BurgerMenuButton = ({ onClick }) => {
  return (
    <button
      className='w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] bg-white text-black flex items-center justify-center'
      onClick={onClick}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <m.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <m.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          d='M 2 9.423 L 20 9.423'
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <m.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default BurgerMenuButton
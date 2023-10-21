
import { motion as m} from 'framer-motion';
import people from '../images/people.webp';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  return (
    <m.div
      className='bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-full flex flex-col justify-between'
      variants={variants}
      initial='initial'
      whileInView='animate'
      
    >
      <m.div className=' self-end flex gap-20 items-center' variants={variants}>
        <p className='text-[20px] font-thin text-right'>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className='w-[500px] border-[0.5]' />
      </m.div>

      <m.div className='items-center self-center flex flex-col w-full'>
        <div className='flex gap-[20px] items-center'>
          <img
            src={people}
            alt='People, Business, Image'
            className='w-[300px] h-[100px] rounded-[50px] object-cover'
          />
          <h3 className='text-[96px] flex gap-5'>
            <m.b whileHover={{color: 'orange'}}>Unique</m.b>
            <p className='font-thin'>Ideas</p>
          </h3>
        </div>
        <div className='flex gap-10 items-center'>
          <h3 className='text-[96px] flex gap-5'>
            <m.b whileHover={{color: 'orange'}}>For Your</m.b>
            <p className='font-thin'>Business.</p>
          </h3>
          <button className='px-20 py-2 rounded-full bg-orange-400 h-[100px] text-black text-[20px]'>
            WHAT WE DO?
          </button>
        </div>
      </m.div>
      <m.div className='flex flex-2 max-w-[1366px] self-center' variants={variants}>
        <m.div
          className='border flex flex-col justify-between gap-10 p-12'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h4>Branding</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quia
            natus aliquid quae temporibus nesciunt corporis quisquam
            perspiciatis obcaecati? Architecto error quas vel veniam atque vitae
            aspernatur, animi eveniet voluptate?
          </p>
          <button>Go</button>
        </m.div>
        <div className='border flex flex-col justify-between gap-10 p-12'>
          <h4>Branding</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quia
            natus aliquid quae temporibus nesciunt corporis quisquam
            perspiciatis obcaecati? Architecto error quas vel veniam atque vitae
            aspernatur, animi eveniet voluptate?
          </p>
          <button>Go</button>
        </div>
        <div className='border flex flex-col justify-between gap-10 p-12'>
          <h4>Branding</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quia
            natus aliquid quae temporibus nesciunt corporis quisquam
            perspiciatis obcaecati? Architecto error quas vel veniam atque vitae
            aspernatur, animi eveniet voluptate?
          </p>
          <button>Go</button>
        </div>
        <div className='border flex flex-col justify-between gap-10 p-12'>
          <h4>Ответственный</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quia
            natus aliquid quae temporibus nesciunt corporis quisquam
            perspiciatis obcaecati? Architecto error quas vel veniam atque vitae
            aspernatur, animi eveniet voluptate?
          </p>
          <button className='bg-orange-500'>Go</button>
        </div>
      </m.div>
    </m.div>
  );
};

export default Services;

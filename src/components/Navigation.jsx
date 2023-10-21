import { socials } from '../utils/constants';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex items-center gap-4'>
        {socials.map((social) => (
          <li key={social.id}>
            <a href='/' target='_blank'>
              <img
                src={social.image}
                alt={social.alt}
                className='w-10 h-10 object-contain'
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };

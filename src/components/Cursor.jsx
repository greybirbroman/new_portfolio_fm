import {useState, useEffect} from 'react';
import { motion as m } from 'framer-motion';

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const mouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }

    }, [])

  return (
    <m.div className="w-[50px] h-[50px] rounded-full border-2 border-white fixed" animate={{x: position.x+10, y: position.y+10}}>
      
    </m.div>
  )
}

export { Cursor }

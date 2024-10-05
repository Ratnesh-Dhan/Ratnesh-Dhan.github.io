import React from 'react';
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='bg-[#3C3D37] p-6 flex items-center justify-around text-xl pl-[30%] pr-[20%]'>
        {(router.pathname === '/'? null : 
        <motion.span
        initial={{ y: 0, rotate: 0 }}
        whileHover={{y: [0,-5,5,-5,5,0], rotate: [0,-5,5,-5,5,0], transition: { duration: 0.3 } }}
        >
          <Link href={"/"}>Home</Link>
        </motion.span>
        )}
        <motion.span
          initial={{ y: 0, rotate: 0 }}
          whileHover={{y: [0,-5,5,-5,5,0], rotate: [0,-5,5,-5,5,0], transition: { duration: 0.3 } }}
          >
            <Link href={"/About"}>About</Link>
            </motion.span>
        <motion.span 
          initial={{ y: 0, rotate: 0 }}
          whileHover={{y: [0,-5,5,-5,5,0], rotate: [0,-5,5,-5,5,0], transition: { duration: 0.3 } }}
        >
          <Link href={"/Projects"}>Projects</Link>
          </motion.span>
        <motion.span
          initial={{ y: 0, rotate: 0 }}
          whileHover={{y: [0,-5,5,-5,5,0], rotate: [0,-5,5,-5,5,0], transition: { duration: 0.3 } }}
          >
            <Link href={"/Contact"}>Contact</Link>
          </motion.span>
        <div className='pl-10 flex'>
          <div className='mr-6'>
          <motion.div
            whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
            >
              <a href='https://github.com/Ratnesh-Dhan' target='_blank'>
            <GrGithub size={32}/>
              </a>
          </motion.div>
          </div>
          <motion.div
            whileHover={{scale: 1.2, rotate: -360, transition: {duration: 0.5}}}
            >
         <a href='https://www.linkedin.com/in/ratnesh-dhan/' target='_blank'>

         <GrLinkedin size={32}/>
         </a>
          </motion.div>
          </div>
    </div>
  );
}

export default Navbar
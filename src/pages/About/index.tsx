import Navbar from '@/components/Navbar';
import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='md:m-20 m-5'>

      <h2 className='text-6xl font-bold md:text-8xl text-[#697565]'>About.</h2>
      <p className='font-light text-center md:text-left text-xl mt-5 md:mt-10 text-[#ECDFCC]'>Hi, I&apos;m Ratnesh Dhan, a dedicated software developer with over 1.7 years of experience building dynamic, user-friendly applications. I specialize in front-end development using 
        <span className='text-[#FFDC7F] font-bold'>Next.js</span> , <span className='text-[#FFDC7F] font-bold'>JavaScript</span> ,<span className='text-[#FFDC7F] font-bold'>TypeScript</span> and <span className='text-[#FFDC7F] font-bold'>JAVA</span>, and I&apos;m always eager to expand my knowledge and skills.
         I&apos;ve worked on a range of projects, from banking software to freelance web development, where I contributed to delivering seamless user experiences.

I love staying up-to-date with the latest technologies by working on personal projects and exploring new tools like Tailwind CSS and Zustand. While I have dabbled in backend technologies like Node.js and Java, my primary focus is front-end development, where I excel at creating clean, efficient, and responsive code.</p>
      </div>
    </React.Fragment>
  )
}

export default About
import localFont from "next/font/local";
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] bg-[#181C14] text-[#ECDFCC]`}
    >
      <Navbar />
      <div className='h-[100vh] flex flex-col justify-center p-28 relative'>
        <motion.div
          className='text-7xl font-bold'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1
          }}
        >
          Ratnesh Dhan
        </motion.div>
        <motion.p className='text-3xl mt-5'
          initial={{x: "100%"}}
          animate={{x: 0}}
          transition={{
            type: "spring",
            stiffness: 70, 
            mass: 0.8
          }}
          >Frontend developer</motion.p>
          <p className='absolute right-[-30px] bottom-[150px] rotate-[90deg]'>scroll down ⇾</p>
      </div>
      <div className='min-h-screen pt-8'>
        <h3 className='text-2xl text-center m-8'>Some of my works</h3>
        <div id='some works' className='flex items-center justify-center'>
          <div className='rounded-lg p-2 mr-5 bg-[#3C3D37]'>
            <Link href="https://weather-dashboard-seven-jade.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <Image 
                src="/Ratnesh-Dhan.github.io/WeatherPic.png" 
                alt="Weather Dashboard Preview" 
                width={500} 
                height={300} 
                className="rounded-lg"
              />
            </Link>
            <span className="text-[#ECDFCC]">Weather app</span>
          </div>
          <div className='rounded-lg p-2 bg-[#3C3D37] '>
            <Link href="https://vocbuild.com/" target="_blank" rel="noopener noreferrer"  className="block">
              <Image 
                src='/Ratnesh-Dhan.github.io/Vocbuild.png'
                alt="Vocbuild Preview"
                width={500}
                height={300}
                className='rounded-lg'
              />
            </Link>
            <span className='text-[#ECDFCC] m-3'>Online video dictonary</span>
          </div>
        </div>
      </div>
    </div>
  );
}

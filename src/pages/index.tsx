import localFont from "next/font/local";
import { motion } from "framer-motion";
import Projectcard from "@/components/Projectcard";

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

const Home = () => {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]  text-[#ECDFCC]`}
    >
      <div className="h-[100vh] flex flex-col justify-center p-28 relative">
        <motion.div
          className="text-7xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
        >
          Ratnesh Dhan
        </motion.div>
        <motion.p
          className="text-3xl mt-5"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            mass: 0.8,
          }}
        >
          FullStack developer
        </motion.p>
        <p className="absolute right-[-30px] bottom-[150px] rotate-[90deg]">
          scroll down ⇾
        </p>
      </div>
      <div className="min-h-screen pt-8">
        <h3 className="text-2xl text-center m-8">Some of my works</h3>
        <div id="some works" className="flex justify-between flex-wrap mx-20">
          <Projectcard
            link="https://github.com/Ratnesh-Dhan/ImageModder/releases/tag/v1.0"
            image="/ImageMod.png"
            title="ImageMod"
            description="An image processing tool for scientific applications"
          />
          <Projectcard
            link="https://my-weather-search.vercel.app/"
            image="/WeatherPic.png"
            title="Weather Dashboard"
            description="weather dashboard app"
          />
          <Projectcard
            link="https://vocbuild.com/"
            image="/Vocbuild.png"
            title="Vocbuild"
            description="Online video dictionary"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;

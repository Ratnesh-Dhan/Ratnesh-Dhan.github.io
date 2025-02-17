import Projectcard from "@/components/Projectcard";
import React from "react";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="md:m-20 mt-10 ml-4">
        <h2 className="text-6xl font-bold md:text-8xl text-[#697565]">
          Projects.
        </h2>
      </div>
      <div className="flex flex-wrap justify-between items-start md:mx-80 mx-5 ">
        <Projectcard
          link="https://github.com/Ratnesh-Dhan/ImageModder/releases/tag/v1.0"
          image="/ImageMod.png"
          title="ImageMod"
          description="An advanced image processing tool for scientific applications, featuring filtering, enhancement, and transformation for precise analysis and visualization."
        />
        <Projectcard
          link="https://my-weather-search.vercel.app/"
          image="/WeatherPic.png"
          title="Weather Dashboard"
          description="Weather dashboard app"
        />
        <Projectcard
          link="https://vocbuild.com/"
          image="/Vocbuild.png"
          title="Vocbuild"
          description="Online video dictionary"
        />
      </div>
    </React.Fragment>
  );
};

export default Projects;

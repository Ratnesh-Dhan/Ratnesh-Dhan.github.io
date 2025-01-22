
import Projectcard from '@/components/Projectcard'
import React from 'react'

const Projects = () => {
  return (
    <React.Fragment>
      <div className='md:m-20 mt-10 ml-4'>

        <h2 className='text-6xl font-bold md:text-8xl text-[#697565]'>Projects.</h2>

      </div>
      <div className=' flex felx-wrap justify-around md:mx-60 mx-5'>
        <Projectcard 
          link="https://my-weather-search.vercel.app/"
          image="/WeatherPic.png"
          title="Weather Dashboard"
          description="Weather dashboard app"
        />
      
      <Projectcard 
          link="https://vocbuild.com/"
          image='/Vocbuild.png'
          title="Vocbuild"
          description="Online video dictionary"
        />
      </div>
    </React.Fragment>
  )
}

export default Projects
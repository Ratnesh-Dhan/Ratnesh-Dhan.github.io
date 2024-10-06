import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projectcard = ({link,  image, title, description}: {link: string, image: string,  title: string, description: string}) => {
  return (
    <div className='rounded-lg p-2 mr-5 bg-[#3C3D37]'>
            <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
              <Image 
                src={image}
                alt={description}
                width={500} 
                height={300} 
                className="rounded-lg"
              />
            </Link>
            <div className='mt-4'>
            <span className=" font-bold text-[#697565] text-xl">{title}</span>
            <p className="text-[#ECDFCC] m-2">{description}</p>
            </div>
    </div>
  )
}

export default Projectcard
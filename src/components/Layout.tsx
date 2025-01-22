import React from 'react'
import Navbar from './Navbar'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="bg-[#181C14] min-h-screen">
            <div className=" text-[#ECDFCC]">
            <Navbar />
            </div>
            {children}
        </div>
    )
}

export default Layout   
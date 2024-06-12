import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Fabric from '../assets/fabric.svg'

const HomeNavbar = () => {
  return (
      <nav class="bg-white flex justify-between p-4 border-b">
          <Link to='/' className=' flex items-center justify-between'>
            <img src={Fabric}
            className=' h-5 sm:h-6 md:h-8'
             alt="Kendra Logo" />
             <h1 className=' font-bold max-sm:text-xl text-2xl sm:text-3xl ml-1'>Kendra Fabric</h1>
             </Link>
            <UserButton />
        </nav>
  )
}

export default HomeNavbar
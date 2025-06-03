"use client"

import { Sparkles } from 'lucide-react'
import React from 'react'
import ModeToggle from '../toggle/ModeToggle'

const NavbarComponent = () => {
  return (
    <div className='flex justify-between items-center w-full py-4 px-4'>
      <div className="font-bold">Home</div>
      <div className="flex items-center gap-4">
        <Sparkles color='#1D9BF0' className="mr-2" />
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavbarComponent
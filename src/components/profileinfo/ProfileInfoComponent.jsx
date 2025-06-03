'use client'

import { Bell, BookmarkCheck, CircleEllipsis, Ellipsis, Hash, Home, LayoutList, Mail, UserRound } from 'lucide-react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const ProfileInfoComponent = () => {
  return (
    <div className='w-full mt-5 px-2'>
      <div className='flex flex-col gap-7'>
        {/* Navigation Items */}
        <div className='flex justify-center items-center gap-4'>
          <div><Home fill='#1D9BF0' color="#1D9BF0"/></div>
          <div className='text-[#1D9BF0] font-bold'>Home</div>
        </div>

        <div className='flex justify-center items-center gap-4'>
          <div><Hash /></div>
          <div className='font-bold'>Explore</div>
        </div>

        <div className='flex justify-center items-center gap-4 ml-7'>
          <div><Bell /></div>
          <div className='font-bold'>Notification</div>
        </div>

        <div className='flex justify-center items-center gap-4 ml-2'>
          <div><Mail /></div>
          <div className='font-bold'>Messages</div>
        </div>

        <div className='flex justify-center items-center gap-4 ml-4'>
          <div><BookmarkCheck /></div>
          <div className='font-bold'>Bookmarks</div>
        </div>

        <div className='flex justify-center items-center gap-4 mr-9'>
          <div><LayoutList /></div>
          <div className='font-bold'>Lists</div>
        </div>

        <div className='flex justify-center items-center gap-4 mr-5'>
          <div><CircleEllipsis /></div>
          <div className='font-bold'>More</div>
        </div>
      </div>

       {/* Authentication Section */}
        <div className='flex justify-center items-center gap-4 mr-5'>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-8 w-8",
                  userButtonTrigger: "focus:shadow-md"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <div className='flex flex-col gap-2 w-full px-4'>
              <SignInButton mode='modal'>
                <button className='font-bold bg-transparent text-blue-400 border border-blue-400 p-2 rounded-2xl w-full hover:bg-blue-50 transition-colors duration-200'>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <button className='font-bold bg-blue-400 text-white p-2 rounded-2xl w-full hover:bg-blue-500 transition-colors duration-200'>
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>

      {/* Tweet Button (only visible when signed in) */}

      <SignedIn>
        <div className='w-full flex justify-center mt-4'>
          <button className='font-bold bg-blue-400 text-white p-2 rounded-2xl w-full hover:bg-blue-500 transition-colors duration-200'>
            Tweet
          </button>
        </div>

        {/* Profile Section (only visible when signed in) */}
        
        <div className='w-full flex justify-between mt-10'>
          <div className='flex gap-2'>
            <div>
              <img 
                className='w-10 h-10 rounded-full object-cover' 
                src="/Profile Picture.png" 
                alt="Profile" 
              />
            </div>
            <div>
              <h3 className='font-bold'>Jerome Bell</h3>
              <h5 className='text-gray-400'>@afonsoinocente</h5>
            </div>
          </div>
          <div>
            <Ellipsis className='text-gray-500 hover:text-gray-800 dark:hover:text-gray-200' />
          </div>
        </div>
      </SignedIn>
    </div>
  )
}

export default ProfileInfoComponent
// src/app/profile/page.jsx
'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faRetweet, 
  faHeart as solidHeart, 
  faShareFromSquare 
} from '@fortawesome/free-solid-svg-icons';
import { MessageCircle, Repeat2, Heart, Share2 } from 'lucide-react';
import ModeToggle from '../toggle/ModeToggle'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const ProfilePage = () => {
  // State for Post 1
  const [post1, setPost1] = useState({
    isLiked: false,
    likeCount: 0
  });

  const handlePost1Like = () => {
    setPost1(prev => ({
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1
    }));
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen dark:border-gray-800">
      {/* Profile Header */}
      <div className="p-4 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          {/* Left side - Back button and profile info */}
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
              <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-bold text-xl">Name</h1>
              <p className="text-gray-500 text-sm dark:text-gray-400">9 Tweets</p>
            </div>
          </div>

          {/* Right side - Theme toggle and auth buttons */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            
            <div className="flex items-center gap-2">
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
                <div className="flex gap-2">
                  <SignInButton mode="modal">
                    <button className="font-bold bg-transparent text-blue-400 border border-blue-400 px-4 py-1.5 rounded-2xl hover:bg-blue-50 transition-colors duration-200 dark:hover:bg-gray-800">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="font-bold bg-blue-400 text-white px-4 py-1.5 rounded-2xl hover:bg-blue-500 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mb-4 w-full">
        <div>
          <img src="/back.png" alt="background" />
        </div>
        <div className="relative px-4">
          <div className="absolute -top-16 border-2 border-white rounded-full overflow-hidden">
            <img 
              src="/Profile Picture.png" 
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover object-center"
              width={128}
              height={128}
              loading="eager" // Prevents lazy-load blur
            />
          </div>
          <div className="pt-20">
            <div className="flex justify-end mb-4">
              <button className="px-4 py-2 border border-gray-300 font-bold rounded-full hover:bg-gray-100 text-[#1D9BF0]">
                Edit profile
              </button>
            </div>
            <h2 className="font-bold text-xl">Davide Biscuso</h2>
            <p className="text-gray-500">@biscuttu</p>
            <p className="my-3">Product Designer</p>
            <div className="flex gap-4 text-gray-500 text-sm">
              <span>London</span>
              <span>Joined September 2011</span>
            </div>
            <div className="flex gap-4 mt-3">
              <span className="font-semibold"><span className="text-black">569</span> Following</span>
              <span className="font-semibold"><span className="text-black">72</span> Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button className="flex-1 py-4 font-bold border-b-4 border-blue-500 text-[#1D9BF0]">Tweets</button>
        <button className="flex-1 py-4 text-gray-500">Tweets & replies</button>
        <button className="flex-1 py-4 text-gray-500">Media</button>
        <button className="flex-1 py-4 text-gray-500">Likes</button>
      </div>

      {/* Post 1 */}
      <div className='w-full border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200'>
        <div className='flex gap-3'>
          <div>
            <img 
              className='w-10 h-10 rounded-full object-cover' 
              src="/Profile Picture.png" 
              alt="Profile" 
            />
          </div>

          <div className='flex-1'>
            <div className='flex items-center gap-1'>
              <h3 className='font-bold'>Davide Biscuso</h3>
              <span className='text-gray-500'>@biscuttu</span>
              <span className='text-gray-400'>· 23s</span>
            </div>
            
            <p className='mt-1 mb-2'>Tom is in a big hurry.</p>

            {/* Post Media */}
            <div>
              <img className='w-full rounded-xl' src="/Media.png" alt="Post 1" />  
            </div>

            {/* Post Actions */}
            <div className='flex justify-between text-gray-500 max-w-md mt-3'>
              <button className='flex items-center gap-1 group'>
                <MessageCircle className='w-5 h-5 group-hover:text-blue-500' />
                <span className='text-xs group-hover:text-blue-500'>81</span>
              </button>
              
              <button className='flex items-center gap-1 group'>
                <Repeat2 className='w-5 h-5 group-hover:text-green-500' />
                <span className='text-xs group-hover:text-green-500'>12</span>
              </button>
              
              <button 
                className='flex items-center gap-1 group'
                onClick={handlePost1Like}
              >
                <Heart 
                  className={`w-5 h-5 ${post1.isLiked ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'}`} 
                />
                <span className={`text-xs ${post1.isLiked ? 'text-red-500' : 'group-hover:text-red-500'}`}>
                  {post1.likeCount.toLocaleString()}
                </span>
              </button>
              
              <button className='flex items-center gap-1 group'>
                <Share2 className='w-5 h-5 group-hover:text-blue-500' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
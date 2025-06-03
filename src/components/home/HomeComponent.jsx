"use client";

import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import { Frown } from 'lucide-react';
import { ImageUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { AiOutlineFileGif } from "react-icons/ai";
import { LuCalendarSearch } from "react-icons/lu";

const HomeComponent = () => {
  // State for Post 1
  const [post1, setPost1] = useState({
    isLiked: false,
    likeCount: 0
  });

  // State for Post 2
  const [post2, setPost2] = useState({
    isLiked: false,
    likeCount: 0
  });

  const handlePost1Like = () => {
    setPost1(prev => ({
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1
    }));
  };

  const handlePost2Like = () => {
    setPost2(prev => ({
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1
    }));
  };

  return (
    <div className='w-full'>

      {/* Tweet Composer */}
      
      <div className='w-full h-fit border-t border-b border-gray-200 py-2'>
        <div className='flex px-5 gap-2'> 
          <div>
            <img className='w-10 h-10 rounded-full' src="/Profile Picture.png" alt="Profile" />
          </div>
          <div className='flex-1'>
            <input 
              className='outline-none w-full text-lg' 
              type="text"  
              placeholder='What is happening?'
            />
          </div>
        </div>

        <div className='flex justify-between px-2 mt-4'>
          <div className='flex gap-4 ml-16'>
            <ImageUp size={20} color='#1D9BF0'/>
            <AiOutlineFileGif size={20} color='#1D9BF0'/>
            <AlignJustify size={20} color='#1D9BF0'/>
            <Frown size={20} color='#1D9BF0'/>
            <LuCalendarSearch size={20} color='#1D9BF0'/>
          </div>
          <div>
            <button className="bg-[#1D9BF0] px-4 py-2 rounded-full font-bold text-white hover:bg-[#1A8CD8]">
              Tweet
            </button>
          </div>
        </div>
      </div>

      {/* Post 1 */}
      <div className='w-full border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200'>
        <div className='flex gap-3'>
          <div>
            <img 
              className='w-10 h-10 rounded-full object-cover' 
              src="/Profile Picture 1.png" 
              alt="Profile" 
            />
          </div>

          <div className='flex-1'>
            <div className='flex items-center gap-1'>
              <h3 className='font-bold'>Devon Lane</h3>
              <span className='text-gray-500'>@johndue</span>
              <span className='text-gray-400'>· 23s</span>
            </div>
            
            <p className='mt-1 mb-2'>Tom is in a big hurry.</p>

            {/* Post Action */}

            <div>
              <img className='w' src="/Media.png" alt="Post 1" />  
            </div>

            <div className='flex justify-between text-gray-500 max-w-md'>
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

      {/* Post 2 */}

      <div className='w-full border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200'>
        <div className='flex gap-3'>
          <div>
            <img 
              className='w-10 h-10 rounded-full object-cover' 
              src="/Medium 1.png" 
              alt="Profile" 
            />
          </div>

          <div className='flex-1'>
            <div className='flex items-center gap-1'>
              <h3 className='font-bold'>Darlene Robertson</h3>
              <span className='text-gray-500'>@johndue</span>
              <span className='text-gray-400'>· 23s</span>
            </div>
            
            <p className='mt-1 mb-2'>Tom is in a big hurry.</p>

            {/* Post Action */}

            <div>
              <img className='w' src="/Container.png" alt="Post 2" />  
            </div>

            <div className='flex justify-between text-gray-500 max-w-md'>
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
                onClick={handlePost2Like}
              >
                <Heart 
                  className={`w-5 h-5 ${post2.isLiked ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'}`} 
                />
                <span className={`text-xs ${post2.isLiked ? 'text-red-500' : 'group-hover:text-red-500'}`}>
                  {post2.likeCount.toLocaleString()}
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
}

export default HomeComponent;
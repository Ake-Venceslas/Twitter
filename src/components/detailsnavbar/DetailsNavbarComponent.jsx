import { Search } from 'lucide-react';
import React from 'react';

const DetailsNavbarComponent = () => {
  return (
    <div className='py-4 mx-4 fixed top-0 z-50'>
      <div className='flex border rounded-xl w-full h-fit p-2'>
        <Search color='gray' size={25} /> 
        <input className='outline-none' type="text" placeholder='search tweet' />
      </div>

      {/* What's happening */}
      <div className="bg-secondary rounded-xl p-4 space-y-4 mt-4">
        <h2 className="font-bold text-lg">What's happening</h2>

        {/* First News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">COVID19 · Last night</p>
            <p className="font-bold text-sm">
              England's Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </p>
            <p className="text-[#1DA1F2]">Trending with #covid19</p>
          </div>
          <img
            src="/Placeholder.png" 
            alt="COVID news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        {/* Second News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">US news · 4h ago</p>
            <p className="font-bold text-sm">
              Parler may go offline following suspensions by Amazon, Apple and Google
            </p>
            <p className="text-[#1DA1F2]">Trending with #trump</p>
          </div>
          <img
            src="/Placeholder 1.png" 
            alt="Parler news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        {/* Third News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">India · 1h ago</p>
            <p className="font-bold text-sm">
              India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
            </p>
            <p className="text-[#1DA1F2]">Trending with #sport</p>
          </div>
          <img
            src="/Thumbnail.png" 
            alt="India Australia news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        <p className="text-[#1DA1F2] cursor-pointer">Show more</p>
      </div>

      {/* Who to follow */}
      <div className="bg-secondary rounded-xl p-4 space-y-4 mt-4">
        <h2 className="font-bold text-lg">Who to follow</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Profile Picture 2.png" 
              alt="Bessie"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Bessie Cooper</p>
              <p className="text-gray-500 text-sm">@alessandroveronezi</p>
            </div>
          </div>
          <button className="text-[#1DA1F2] font-semibold border border-[#1DA1F2] rounded-full px-3 py-1 text-sm">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Medium.png" 
              alt="Jenny"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">@gabrielcantarin</p>
            </div>
          </div>
          <button className="text-[#1DA1F2] font-semibold border border-[#1DA1F2] rounded-full px-3 py-1 text-sm">
            Follow
          </button>
        </div>

        <p className="text-[#1DA1F2] cursor-pointer">Show more</p>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 mt-4">
        <p>Terms of Service Privacy Policy Cookie Policy</p>
        <p>Ads info More © 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
}

export default DetailsNavbarComponent;
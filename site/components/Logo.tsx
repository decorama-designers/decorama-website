import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="text-5xl font-extralight tracking-tighter text-gray-800 lowercase leading-none" style={{ fontFamily: 'serif' }}>
      decorama
    </div>
    <div className="flex items-center w-full mt-[-4px]">
      <div className="h-[2px] bg-gray-400 flex-grow mr-2"></div>
      <span className="text-sm italic font-serif tracking-widest text-gray-600">designers</span>
      <div className="h-[1px] bg-gray-300 flex-grow ml-2"></div>
    </div>
  </div>
);

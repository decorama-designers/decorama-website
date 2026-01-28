
import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <img
      src="/decoramalogo.png"
      alt="Decorama logo"
      className="h-18 w-auto mb-1"
    />
  </div>
);

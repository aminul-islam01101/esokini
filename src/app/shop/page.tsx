import AnimatedText from '@/components/re-ui/animatedText';
import React from 'react'

export default function page() {
  return (
    <div className="h-screen w-ful flex justify-center items-center bg-white">
      <span className="text-xl md:text-2xl xl:text-5xl text-black">
        <AnimatedText text="Coming Soon.." />
      </span>
    </div>
  );
}

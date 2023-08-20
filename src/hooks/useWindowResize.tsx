"use client";
import { useState, useEffect } from 'react';

function useWindowResize() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the resize event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Call the handler once to set the initial window size
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return windowSize;
}

export default useWindowResize;

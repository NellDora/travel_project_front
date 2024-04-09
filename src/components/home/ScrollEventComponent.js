import React, { useEffect } from 'react';

const ScrollEventComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
          onScroll(); 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [onScroll]);
    
      return null;
};

export default ScrollEventComponent;
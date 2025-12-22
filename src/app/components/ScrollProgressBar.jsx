'use client';

import { useState, useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInContent, setIsInContent] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // Check if blog content section exists and get its position
        const blogContent = document.getElementById('blog-content-section');
        if (blogContent) {
          const contentTop = blogContent.offsetTop;
          setIsInContent(scrollTop >= contentTop - 100); // 100px threshold
        }
        
        const docHeight = scrollHeight - clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        const finalProgress = Math.min(Math.max(progress, 0), 100);
        
        console.log('ScrollTop:', scrollTop, 'DocHeight:', docHeight, 'Progress:', finalProgress);
        setScrollProgress(finalProgress);
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 bg-[#E5E7EB] h-1 ${
          isInContent ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div
        className={`h-full transition-[width,background-color] duration-150 ease-out ${
          isInContent ? 'bg-[var(--mudbrown)]' : 'bg-transparent'
        }`}
        style={{ 
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
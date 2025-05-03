import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        } 
      }
    );
  }, []);
  
  return (
    <footer 
      ref={footerRef} 
      className="py-8 px-4 md:px-8 lg:px-16 text-center text-text-secondary border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <p>© {currentYear} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
} 